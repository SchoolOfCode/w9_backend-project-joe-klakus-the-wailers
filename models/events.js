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
  
//   export async function updateTweet(id, updatedTweet) {
//     const { name, tweet } = updatedTweet;
//     const data = await query(
//       `UPDATE tweets SET name = $1, tweet = $2 WHERE tweet_id = $3 RETURNING *;`,
//       [name, tweet, Number(id)]
//     );
//     return data.rows;
//   }
  
  export async function deleteEvent(id) {
    const data = await query(
      `DELETE FROM events WHERE events_id = $1 RETURNING *`,
      [Number(id)]
    );
    return data.rows;
  }