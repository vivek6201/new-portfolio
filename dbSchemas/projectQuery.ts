import mongoose, { Schema } from "mongoose";

interface IProjectQuerySchema {
    fullName: string;
    email: string;
    subject: string;
    phoneNumber: number;
    message: string;
}

const projectQuerySchema = new Schema<IProjectQuerySchema>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ProjectQuery = mongoose.models.ProjectQuery ?? mongoose.model("ProjectQuery", projectQuerySchema);
export default ProjectQuery;