import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("CONNECTED TO MONGODB");
  } catch (e) {
    console.log(e);
  }
};

export default connectMongoDB;
