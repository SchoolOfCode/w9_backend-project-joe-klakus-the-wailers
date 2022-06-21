import express from "express";
import { getUsers } from "../models/user.js";

const usersRouter = express.Router();
//GET ALL USERS (GET) 
usersRouter.get("/users", async(req, res)=>{
    const result = await getUsers(); //models users 
    res.json({Success : true , Payload: result})
})
//CREATE A NEW USER (POST)
usersRouter.post("/users", async(req, res)=>{
    const newUser = req.body 
    const result = await createUser(newUser);
    res.json({Success : true , Payload: result})
})

//UPDATE USER DETAILS (PATCH) 
usersRouter.patch("/users/:id", async(req, res)=>{
    const id = Number(req.params.id);
    const updatedUser = req.body 
    const result = await updateUser(updatedUser, id);
    res.json({Success : true , Payload: result})
})

//DELETE A USER (DELETE)

usersRouter.delete("/users/:id", async(req, res)=>{
    const id = Number(req.params.id);
    const result = await deleteUser(id);
    res.json({Success : true , Payload: result})
})

export default usersRouter;

