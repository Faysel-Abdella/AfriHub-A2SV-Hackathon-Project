import torch
import pandas as pd
from sklearn import preprocessing
from train import RecsysModel  # Assuming your model class is in a separate 'train.py' file

# Load your input CSV data
input_data = pd.read_csv('../inputs/train_v2.csv')  # Replace '../train_v2.csv' with the actual file path

# Determine the number of unique users and jobs in your input data
num_users = input_data['user'].nunique()
num_jobs = input_data['job'].nunique()

# Load the trained model
model = RecsysModel(num_users=num_users, num_jobs=num_jobs)  # Provide the correct values for num_users and num_jobs
model.load_state_dict(torch.load('./trained_model_test1.pth', map_location=torch.device('cpu')))
model.eval()


# Load the label encoders used for preprocessing
lbl_user = preprocessing.LabelEncoder()
lbl_job = preprocessing.LabelEncoder()
lbl_user.classes_ = pd.read_csv('lbl_user_classes.csv')['classes'].tolist()
lbl_job.classes_ = pd.read_csv('lbl_job_classes.csv')['classes'].tolist()

# Function to get job recommendations for a user ID
def get_job_recommendations(user_id, top_k=10):
    # Encode the user ID
    user_encoded = lbl_user.transform([user_id])

    # Create a list of job IDs
    job_ids = list(range(len(lbl_job.classes_)))

    # Repeat the user ID for all job IDs
    user_ids = [user_encoded[0]] * len(job_ids)

    # Make predictions using the model
    with torch.no_grad():
        user_tensor = torch.tensor(user_ids, dtype=torch.long)
        job_tensor = torch.tensor(job_ids, dtype=torch.long)
        predictions, _, _ = model(user_tensor, job_tensor)

    # Combine job IDs and predictions
    job_predictions = list(zip(job_ids, predictions))

    # Sort by predicted values (recommendations)
    job_predictions.sort(key=lambda x: x[1], reverse=True)

    # Get the top-k recommended job IDs
    recommended_jobs = [job_id for job_id, _ in job_predictions[:top_k]]

    return recommended_jobs


# ================================================================================
if __name__ == "__main__":
    # Specify the user ID for which you want recommendations
    user_id_to_recommend = 865  # Replace with the actual user ID from your input data

    # Filter the input data for the specified user
    user_data = input_data[input_data['user'] == user_id_to_recommend]

    if not user_data.empty:
        recommended_jobs = get_job_recommendations(user_id_to_recommend)
        print("Recommended Job IDs:", recommended_jobs)
    else:
        print(f"No data found for user with ID {user_id_to_recommend}")