import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");

  } catch (error) {
  console.log(`MongoDB Connected ` + error.message);

  }
  // const conn = await mongoose.connect(process.env.MONGO_URI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // });

};

export default connectDB;
