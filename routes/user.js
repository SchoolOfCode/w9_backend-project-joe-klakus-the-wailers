import express from "express";
import { getUsers } from "../models/user.js";

const usersRouter = express.Router();

usersRouter.get("/users", async(req, res)=>{
    const result = await getUsers(); //models users 
    res.json({Success : true , Payload: result})
})

export default usersRouter;