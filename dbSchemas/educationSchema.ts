import mongoose, { Schema } from "mongoose";

interface IEducationSchema {
  schoolName: string;
  degree: string;
  courseName: string;
  startDate: Date;
  endDate: Date;
  collegeLocation: string;
  degreeType: string;
}

const educationSchema = new Schema<IEducationSchema>(
  {
    schoolName: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
    },
    courseName: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    collegeLocation: {
      type: String,
    },
    degreeType: {
      type: String,
    },
  },
  { timestamps: true }
);

const Education = mongoose.models.Education ?? mongoose.model("Education", educationSchema);
export default Education;