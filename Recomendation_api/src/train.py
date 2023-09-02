import pandas as pd
import torch
from torch.utils.data import Dataset, DataLoader
from sklearn import model_selection

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
            "proposal": torch.tensor(proposal, dtype=torch.float)  # Assuming proposal is a float
        }

def train():
    df = pd.read_csv("../inputs/train_v2.csv")
    # Assuming your CSV has columns: user, job, proposal

    df_train, df_valid = model_selection.train_test_split(
        df, test_size=0.1,random_state=42,stratify=df.proposal.values    )

    train_dataset = JobDataset(
        user=df_train.user.values, job=df_train.job.values, proposal=df_train.proposal.values
    )
    valid_dataset = JobDataset(
        user=df_valid.user.values, job=df_valid.job.values, proposal=df_valid.proposal.values
    )
    # Create DataLoader for efficient batching
    train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)
    valid_loader = DataLoader(valid_dataset, batch_size=64, shuffle=False)

    # Now, you can use train_loader and valid_loader to iterate over your dataset in batches for training and validation.

if __name__ == "__main__":
    train()
