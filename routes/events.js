import express from "express";
import { getEvents } from "../models/events.js";

const eventsRouter = express.Router();

eventsRouter.get("/events", async(req, res)=>{
    const result = await getEvents(); //models events 
    res.json({Success : true , Payload: result})
})

export default eventsRouter;