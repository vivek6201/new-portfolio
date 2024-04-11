import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("DB connection failed");
    console.error(error);
    process.exit(1);
  }
};
