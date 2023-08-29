import express from "express";
import dotenv from "dotenv";
import contactRouter from "./routes/contactRoutes.js"
// import userRouter from "./routes/userRouter.js"
import { errorHandler } from "./middleware/errorhandler.js";
import { connectdb } from "./config/dbConnection.js";
// import { connectUserdb } from "./config/dbConnection.js";
dotenv.config();

connectdb();
// connectUserdb();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5001;

app.use(express.json());

// app.use(express.json.stringify())
app.use('/api/contact',contactRouter);
// app.use('/api/users',userRouter);
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server running on port ${port} `);
})