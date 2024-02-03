import mongoose, { Schema } from "mongoose";

interface IExperienceSchema {
  companyName: string;
  companyLocation: string;
  jobTitle: string;
  startDate: Date;
  endDate: Date;
  jobDescription: string[];
}

const experienceSchema = new Schema<IExperienceSchema>(
  {
    companyName: {
      type: String,
      required: true,
    },
    companyLocation: {
      type: String,
    },
    jobTitle: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    jobDescription: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Experience = mongoose.models.Experience ?? mongoose.model("Experience", experienceSchema);
export default Experience;
