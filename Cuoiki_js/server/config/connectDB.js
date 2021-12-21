import mongoose from 'mongoose';

let url = 'mongodb://localhost:27017/cuoiki';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
export const connectDB = async () => {
  try {
    await mongoose.connect(url, options);
    console.log('connected to DB');
  } catch (error) {
    console.log(error);
  }
};
