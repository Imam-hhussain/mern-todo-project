import { todo } from "../model/todoSchema.js"
export const createTodo= async(req, res, next)=>{
  try{
    await todo.create(req.body)   // try that if error goto to catch thats arror catch pick as a parament and go to forword
    res.json("create");          // the middleware execute one by one 
  }
  catch(error){
     next(error);
  }
  }
export const getAllTodos=async(req, res, next)=>{
  const todos = await todo.find()
    res.json(todos);
  }
export const getTodoById= async(req, res, next)=>{
   // extract id form the params and then they give me res by using database document id in postman
  // const {id} =req.params;  
   //OR  
   const id =req.params.id;
  const todo1= await todo.findById(id)
    res.json(todo1)
   }
export const updateTodo= async(req, res, next)=>{
    // first extarct through id and write the in which you update
   await todo.findByIdAndUpdate(req.params.id,req.body);
  
      res.json("updated")
    }
export const deleteTodo= async (req, res, next)=>{
  try {
    // const {id} =req.params; OR const id =req.params.id OR direct pass
  const deletetodo = await todo.findByIdAndDelete(req.params.id)
  res.json("deleted");
  } 
  catch (error) {
     next(error)
  }
  
   };

  