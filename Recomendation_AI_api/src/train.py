import pandas as pd
from torch.utils.data import Dataset

import torch
from sklearn import preprocessing
from torch.utils.data import DataLoader
from sklearn import model_selection
import torch.nn as nn
from sklearn import metrics
import numpy as np

class JobDataset(Dataset):
    def __init__(self, user, job, proposal):
        self.user = user
        self.job = job
        self.proposal = proposal

    def __len__(self):
        return len(self.user)

    def __getitem__(self, item):
        user = self.user[item]
        job = self.job[item]
        proposal = self.proposal[item]

        return {
            "user": torch.tensor(user, dtype=torch.long),
            "job": torch.tensor(job, dtype=torch.long),
            "proposal": torch.tensor(proposal, dtype=torch.float)
        }

class RecsysModel(nn.Module):
    def __init__(self, num_users, num_jobs, embedding_dim=32):
        super(RecsysModel, self).__init__()
        self.user_embed = nn.Embedding(num_users, embedding_dim)
        self.job_embed = nn.Embedding(num_jobs, embedding_dim)
        self.out = nn.Linear(embedding_dim, 1)

    def forward(self, user, job):
        user_embeds = self.user_embed(user)
        job_embeds = self.job_embed(job)
        
        # You can add a scoring mechanism here, such as dot product or cosine similarity
        # Here, we'll use dot product as an example
        scores = torch.sum(user_embeds * job_embeds, dim=1, keepdim=True)
        return scores

def train():
    # Load your input CSV data
    input_data = pd.read_csv('/content/drive/MyDrive/train_v2.csv')

    lbl_user = preprocessing.LabelEncoder()
    lbl_job = preprocessing.LabelEncoder()

    input_data['user'] = lbl_user.fit_transform(input_data['user'])
    input_data['job'] = lbl_job.fit_transform(input_data['job'])

    # Save label encoders and number of users and jobs
    pd.DataFrame({'classes': lbl_user.classes_}).to_csv('../csvs/lbl_user_classes_02.csv', index=False)
    pd.DataFrame({'classes': lbl_job.classes_}).to_csv('../csvs/lbl_job_classes_02.csv', index=False)
    pd.DataFrame({'num_users': [len(lbl_user.classes_)], 'num_jobs': [len(lbl_job.classes_)]}).to_csv('../csvs/csvs/num_users_jobs_02.csv', index=False)

    # train_data, valid_data = model_selection.train_test_split(
    #     input_data, test_size=0.1, random_state=42, stratify=input_data.proposal.values
    # )
    train_data, valid_data = model_selection.train_test_split(
        input_data, test_size=0.1, random_state=42
    )

    train_dataset = JobDataset(
        user=train_data.user.values, job=train_data.job.values, proposal=train_data.proposal.values
    )
    valid_dataset = JobDataset(
        user=valid_data.user.values, job=valid_data.job.values, proposal=valid_data.proposal.values
    )

    model = RecsysModel(num_users=len(lbl_user.classes_), num_jobs=len(lbl_job.classes_))

    train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)
    valid_loader = DataLoader(valid_dataset, batch_size=64, shuffle=False)

    # Define your loss function and optimizer
    criterion = nn.MSELoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)

    # Training loop
    num_epochs = 10
    for epoch in range(num_epochs):
        model.train()
        train_loss = 0.0
        for batch in train_loader:
            user_ids = batch['user']
            job_ids = batch['job']
            proposals = batch['proposal']

            optimizer.zero_grad()

            outputs = model(user_ids, job_ids)
            loss = criterion(outputs, proposals.view(-1, 1))

            loss.backward()
            optimizer.step()

            train_loss += loss.item()

        train_loss /= len(train_loader)

        # Validation loop
        model.eval()
        val_loss = 0.0
        with torch.no_grad():
            for batch in valid_loader:
                user_ids = batch['user']
                job_ids = batch['job']
                proposals = batch['proposal']

                outputs = model(user_ids, job_ids)
                loss = criterion(outputs, proposals.view(-1, 1))

                val_loss += loss.item()

            val_loss /= len(valid_loader)

        print(f'Epoch {epoch+1}/{num_epochs}, Train Loss: {train_loss:.4f}, Validation Loss: {val_loss:.4f}')

    # Save the trained model
    torch.save(model.state_dict(), '../models/trained_model_02.pth')

if __name__ == "__main__":
    train()
