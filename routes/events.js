import express from "express";
import { body, validationResult } from "express-validator";
import {
  getEvents,
  createEvent,
  deleteEvent,
  updateEvent,
  getEventById,
} from "../models/events.js";

const eventsRouter = express.Router();
// GET ALL EVENTS (GET)
eventsRouter.get("/events", async (req, res) => {
  const result = await getEvents();
  res.json({ Success: true, Payload: result });
});

// //GET EVENT BY ID
eventsRouter.get("/events/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await getEventById(id);
  res.json({ Success: true, Payload: result });
});

// //CREATE A NEW EVENT (POST)
eventsRouter.post(
  "/events",
  body("name_of_event")
    .not()
    .isEmpty()
    .withMessage("Event name cannot be blank"),
  body("long")
    .not()
    .isEmpty()
    .withMessage("Please use the map to select your location"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const newEvent = req.body;
    const result = await createEvent(newEvent);
    res.json({ Success: true, Payload: result });
  }
);

// //UPDATE EVENT DETAILS (PATCH)
eventsRouter.patch("/events/:id", async (req, res) => {
  const id = Number(req.params.id);
  const updatedEvent = req.body;
  const result = await updateEvent(updatedEvent, id);
  res.json({ Success: true, Payload: result });
});

//DELETE AN EVENT (DELETE)

eventsRouter.delete("/events/:id", async (req, res) => {
  const id = Number(req.params.id);
  const result = await deleteEvent(id);
  res.json({ Success: true, Payload: result });
});
export default eventsRouter;
