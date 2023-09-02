import torch

model = RecsysModel(num_users=num_users, num_jobs=num_jobs)  # Initialize the model with the same parameters as in training
model.load("path_to_saved_model")  # Load the saved model weights

def get_recommendations(user_id, num_recommendations=10):
    job_ids = torch.arange(num_jobs)

    user_ids = torch.full((num_jobs,), user_id, dtype=torch.long)

    dataset = JobDataset(user=user_ids, job=job_ids, proposal=torch.zeros(num_jobs))
    dataloader = DataLoader(dataset, batch_size=num_jobs)

    recommendations = []

    for batch in dataloader:
        user = batch["user"]
        job = batch["job"]
        with torch.no_grad():
            output, _, _ = model(user, job)

        recommendations.extend(output.view(-1).tolist())

    sorted_recommendations = sorted(
        enumerate(recommendations), key=lambda x: x[1], reverse=True
    )

    top_recommendations = [job_id for job_id, _ in sorted_recommendations[:num_recommendations]]

    return top_recommendations

user_id_to_test = 123  # Replace with the user ID you want to test
top_jobs = get_recommendations(user_id_to_test)

print("Top Recommended Job IDs for User {}: {}".format(user_id_to_test, top_jobs))
