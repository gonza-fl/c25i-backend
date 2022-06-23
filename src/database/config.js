import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connected');
  } catch (error) {
    console.log(error);
    throw new Error('Internal server error: Database cannot connecting');
  }
}

export default db
