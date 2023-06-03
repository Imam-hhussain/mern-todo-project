import express  from 'express'
import bodyParser from 'body-parser'
import router from './routes/todoRoutes.js';
import {connectDb} from '../backend/config/dbConnection.js';
import {errorHandler} from './midddleware/errorHandler.js';
const app=express();
const PORT= 8000;
connectDb();
app.use(bodyParser.json());  //Global midderware used in every request it is a global
app.use('/' , router);  // mounted routes its is also a middleware
// the only difference of simple and error handler middle is 
// the error handler middler is start with error and vise versa
app.use(errorHandler)   
app.listen(PORT,()=>{
    console.log(`server listning at port ${PORT}`);
});
