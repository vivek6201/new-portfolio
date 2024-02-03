import mongoose, { Schema } from "mongoose";

interface IProjectSchema {
  title: string;
  description: string;
  skills: string[];
  startDate: Date;
  endDate: Date;
  projectData: string[];
}

const projectSchema = new Schema<IProjectSchema>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    skills: [
      {
        type: Schema.Types.ObjectId,
        ref: "Skills",
      },
    ],
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    projectData: [
      {
        type: Schema.Types.ObjectId,
        ref: "ProjectData",
      },
    ],
  },
  { timestamps: true }
);

const Project = mongoose.models.Projects ?? mongoose.model("Projects", projectSchema);
export default Project;
