import mongoose from "mongoose";

const connectMongoDB = async () => {
  const URL1='mongodb+srv://shivacharankosari099:next@next.xiko1k9.mongodb.net/?retryWrites=true&w=majority'
  try {
    await mongoose.connect(URL1);
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;
