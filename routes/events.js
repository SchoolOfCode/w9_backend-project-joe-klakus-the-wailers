import express from "express";
import { getEvents, createEvent, deleteEvent, updateEvent } from "../models/events.js";

const eventsRouter = express.Router();
// GET ALL EVENTS (GET)
eventsRouter.get("/events", async(req, res)=>{
    const result = await getEvents(); 
    res.json({Success : true , Payload: result})
})

// //GET EVENT BY ID
eventsRouter.get("/events/:id", async(req, res)=>{
    const id = Number(req.params.id);
    const result = await getEventById(id); 
    res.json({Success : true , Payload: result})
})


// //CREATE A NEW EVENT (POST)
eventsRouter.post("/events", async(req, res)=>{
    const newEvent = req.body 
    const result = await createEvent(newEvent);
    res.json({Success : true , Payload: result})
})

// //UPDATE EVENT DETAILS (PATCH) 
eventsRouter.patch("/events/:id", async(req, res)=>{
    const id = Number(req.params.id);
    const updatedEvent = req.body 
    const result = await updateEvent(updatedEvent, id);
    res.json({Success : true , Payload: result})
})

//DELETE AN EVENT (DELETE)

eventsRouter.delete("/events/:id", async(req, res)=>{
    const id = Number(req.params.id);
    const result = await deleteEvent(id);
    res.json({Success : true , Payload: result})
})
export default eventsRouter;