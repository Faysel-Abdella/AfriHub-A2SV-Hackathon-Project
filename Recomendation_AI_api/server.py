import pandas as pd
import torch
from sklearn import preprocessing
from torch.utils.data import DataLoader
from flask import Flask, request, jsonify
from src.train import RecsysModel

lbl_user = preprocessing.LabelEncoder()
lbl_job = preprocessing.LabelEncoder()
lbl_user.classes_ = pd.read_csv('./csvs/lbl_user_classes_02.csv')['classes']
lbl_job.classes_ = pd.read_csv('./csvs/lbl_job_classes_02.csv')['classes']
num_users_jobs = pd.read_csv('./csvs/num_users_jobs_02.csv')


class Tester:
    def __init__(self, model_path):
        self.model = RecsysModel(num_users=num_users_jobs['num_users'][0], num_jobs=num_users_jobs['num_jobs'][0])
        self.model.load_state_dict(torch.load(model_path))
        self.model.eval()

    def test(self, user_ids):
        recommendations = []

        for user_id in user_ids:
            if user_id in lbl_user.classes_:
                user_idx = lbl_user.transform([user_id])[0]
                job_scores = self.predict_jobs(user_idx)
                recommendations.append({"user_id": user_id, "job_scores": job_scores})
            else:
                recommendations.append({"user_id": user_id, "job_scores": []})

        return recommendations

    def predict_jobs(self, user_idx):
        user_idx_tensor = torch.tensor([user_idx], dtype=torch.long)
        job_ids_tensor = torch.arange(num_users_jobs['num_jobs'][0], dtype=torch.long)

        with torch.no_grad():
            job_scores = self.model(user_idx_tensor, job_ids_tensor).squeeze().numpy()

        return job_scores

app = Flask(__name__)
model_path = './models/trained_model_02.pth'  # Specify the path to your trained model
tester = Tester(model_path)

@app.route('/recommend', methods=['POST'])
def recommend_jobs():
    data = request.get_json()
    user_id = data.get('user_id')

    if user_id is None:
        return jsonify({"error": "User ID is missing in the request"}), 400

    user_ids = [user_id]  # You can add more user IDs to this list if needed
    recommendations = tester.test(user_ids)

    user_recommendations = []
    for recommended_jobs in recommendations:
        user_rec = {
            "user_id": recommended_jobs['user_id'],
            "job_recommendations": []
        }

        job_scores = recommended_jobs['job_scores']
        sorted_jobs = sorted(
            zip(lbl_job.classes_, job_scores),
            key=lambda x: x[1],
            reverse=True
        )

        for job, score in sorted_jobs:
            user_rec["job_recommendations"].append({"job": job, "score": score})

        user_recommendations.append(user_rec)

    return jsonify(user_recommendations)

if __name__ == "__main__":
    app.run(debug=True)