import { query } from '../db/index.js';

//Gets all the events from the database
export const getEvents = async() =>{
    const data = await query(`SELECT * FROM events;`);
    return data.rows;
  }
  //Creates a new event
  export const createEvent = async(newEvent) => {
    const { name_of_event, event_host, start_time, end_time, description,cost, address, lat, long, userAttending } = newEvent;
    const data = await query(
        `INSERT INTO events (name_of_event, event_host, start_time, end_time, description,cost, address, lat, long, userAttending) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;`,
      [name_of_event, event_host, start_time, end_time, description,cost, address, lat, long, userAttending]
    );
    return data.rows;
  }

  // UPDATE AN EVENT BY ID
export const updateEvent = async(updatedEvent, id) => {
    const { name_of_event, event_host, start_time, end_time, description,cost, address, lat, long, userAttending } = updatedEvent
    const eventUpdate = await query(`SELECT * FROM events WHERE events_id = ${id}`)
    if (name_of_event) {
        await query (`UPDATE events SET name_of_event = $1 WHERE events_id = ${id};`,
        [name_of_event] )
    }
    // if (event_host) {
    //     await query (`UPDATE events SET event_host = $1 WHERE events_id = ${id};`,  //It doesn't like me changing this!!
    //     [event_host] )
    // }
    if (start_time) {
        await query (`UPDATE events SET start_time = $1 WHERE events_id = ${id};`,
        [start_time] )
    }
    if ( end_time) {
        await query (`UPDATE events SET end_time = $1 WHERE events_id = ${id};`,
        [end_time] )
    }
    if ( description) {
        await query (`UPDATE events SET description = $1 WHERE events_id = ${id};`,
        [description] )
    }
    if ( cost) {
        await query (`UPDATE events SET cost = $1 WHERE events_id = ${id};`,
        [cost] )
    }
    if ( address) {
        await query (`UPDATE events SET address = $1 WHERE events_id = ${id};`,
        [address] )
    }
    if ( lat) {
        await query (`UPDATE events SET lat = $1 WHERE events_id = ${id};`,
        [lat] )
    }
    if ( long) {
        await query (`UPDATE events SET long = $1 WHERE events_id = ${id};`,
        [long] )
    }
    if ( userAttending) {
        await query (`UPDATE events SET userAttending = $1 WHERE events_id = ${id};`,
        [userAttending] )
    }
    if (eventUpdate) {
        return eventUpdate.rows
    } 
}
  
  export async function deleteEvent(id) {
    const data = await query(
      `DELETE FROM events WHERE events_id = $1 RETURNING *`,
      [Number(id)]
    );
    return data.rows;
  }