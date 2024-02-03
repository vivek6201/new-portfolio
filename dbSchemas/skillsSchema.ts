import mongoose, { Schema } from "mongoose";

interface ISkillsSchema {
  skillName: string;
  skillImage: string;
}

const skillsSchema = new Schema<ISkillsSchema>(
  {
    skillName: {
      type: String,
      required: true,
    },
    skillImage: {
      type: String,
    },
  },
  { timestamps: true }
);

const Skills = mongoose.models.Skills ?? mongoose.model("Skills", skillsSchema);
export default Skills;