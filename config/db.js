import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("hi");

    console.log(`MongoDBConnected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDb;
