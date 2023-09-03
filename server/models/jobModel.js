const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const JobSchema = new Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userModel",
    required: true,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  SkillRequierd: [
    {
      type: String,
    },
  ],
  Budget: {
    type: String,
  },
  projectDuration: {
    type: String,
  },
  experienceLevel: {
    enum: ["advanced", "intermediate", "beginner"],
  },
});
module.exports = mongoose.model("Job", JobSchema);
