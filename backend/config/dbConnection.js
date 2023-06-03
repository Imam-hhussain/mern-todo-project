import mongoose from 'mongoose';
export const connectDb=async ()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/tododb')
  }
  


/*
 'mongodb://127.0.0.1:27017/tododb'  first is a database server
 and the second the database name the second parameter is sure the connection 
*/