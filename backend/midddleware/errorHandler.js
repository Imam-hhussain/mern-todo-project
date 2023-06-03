export const errorHandler= (err, req, res, next)=>{
    // first destructure the err because this err object  is inbetween in anogther object if eeror cause the node nodemon provide the err like object define path, messege etc. 
let error ={...err};

//   // wrong mongoos object id error 
    if(err.name==='CastError'){
       const message = `resource not found. Ivalid: ${err.path}`  // path define in err(object) which is id
       error = new Error(message) // Error is builtin 
   }
   if(err.name === 'ValidationError'){
       const message = Object.values(err.errors).map(value => value.message); // return an array
       error = new Error(message);
   }

   // Handling Mongoos duplicate key errors
   if(err.code === 11000){ 
       const message= `Duplicate ${Object.keys(err.keyValue)} entered`;
       error = new Error(message);
   }

res.json({  //write own key and values 
   success: false,  
   messege: error.message || "internal sever error" // if user provide a custom error then error messege error as a default the messege the internal server error 
   });
}