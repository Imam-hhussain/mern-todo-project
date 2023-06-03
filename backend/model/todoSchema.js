import mongoose from 'mongoose';
const { Schema } = mongoose;
   //Note if you see all the error validation goto moagooes documentation
const todoSchema=new Schema({
      title:{            
        type: String,        
        required: [true, "please provide the title" ],// its you not goto the blank title its means that you cannot save record with title is blank 
        minLength:[5,"{VALUE} is not a valid title"], // value pick from the client side it length is less than 5 e.g if client send the title "tod" the message for that is "tod is not a valid title.
        unique : [true, "{VALUE} is already entered. please provide different title"]
      },
      body: {
        type:  String,
        required: [true, "please provide body"],
        unique : [true, "{VALUE} is already entered. please provide different title"]
      },
      status:{
       type: Boolean,
       required: [true, "please provide status"]
      }
});//   that schema implement in a controller

export const todo = mongoose.model('todos',todoSchema)  //give two parameter one is the collection name and follow that schema means the upper scheama 