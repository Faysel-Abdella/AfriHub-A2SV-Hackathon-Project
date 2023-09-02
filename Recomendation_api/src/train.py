import tez
import pandas as pd
import torch
from torch.utils.data import Dataset, DataLoader
from sklearn import model_selection
import torch.nn as nn
from sklearn import metrics,preprocessing
import numpy as np

class JobDataset(Dataset):
    def __init__(self, user, job, proposal):
        self.user = user
        self.job = job
        self.proposal = proposal
        self.step_scheduler_after = "epoch"

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
class RecsysModel(tez.Model):
    def __init__(self,num_users,num_jobs):
        super().__init__()
        self.user_embed = nn.Embedding(num_users,32)
        self.job_embed = nn.Embedding(num_jobs,32)

        self.out = nn.Linear(64,1)

    def fetch_optimizer(self):
        opt = torch.optim.Adam(self.parameters(),lr =1e-3 )
        return opt
    def fetch_sechuler(self):
        sch = torch.optim.lr_scheduler.StepLR(self.optimizer,step_size=3,gamma = 0.7)
        return sch

    def monitor_metrics(self, output,proposal):
        output = output.detach().cpu().numpy()
        proposal = proposal.detach().cpu().numpy()
        return {
            "rmse":np.sqrt(metrics.mean_squared_error(proposal,output))
        }


    def forward(self,user ,job,proposal = None):
        user_embeds = self.user_embed(user)
        job_embeds = self.user_embed(job)
        output = torch.cat([user_embeds,job_embeds],dim=1)
        output = self.out(output)


        loss = nn.MSELoss()(output,proposal.view(-1,1))
        calc_metrics = self.monitor_metrics(output,proposal.view(-1,1))
        return output,loss,calc_metrics




def train():
    df = pd.read_csv("../inputs/train_v2.csv")
    # Assuming your CSV has columns: user, job, proposal
    lbl_user = preprocessing.LabelEncoder()
    lbl_job = preprocessing.LabelEncoder()

    df.user = lbl_user.fit_transform(df.user.values)
    df.job = lbl_job.fit_transform(df.user.values)


    df_train, df_valid = model_selection.train_test_split(
        df, test_size=0.1,random_state=42,stratify=df.proposal.values    )

    train_dataset = JobDataset(
        user=df_train.user.values, job=df_train.job.values, proposal=df_train.proposal.values
    )
    valid_dataset = JobDataset(
        user=df_valid.user.values, job=df_valid.job.values, proposal=df_valid.proposal.values
    )

    model = RecsysModel(num_users=len(lbl_user.classes_), num_jobs=len(lbl_job.classes_))
    model.fit(
        train_dataset, valid_dataset,train_bs = 1024,
        valid_bs = 1024, fp16 = True
    )
    # Create DataLoader for efficient batching
    train_loader = DataLoader(train_dataset, batch_size=64, shuffle=True)
    valid_loader = DataLoader(valid_dataset, batch_size=64, shuffle=False)

    # Now, you can use train_loader and valid_loader to iterate over your dataset in batches for training and validation.
    
if __name__ == "__main__":
    train()
