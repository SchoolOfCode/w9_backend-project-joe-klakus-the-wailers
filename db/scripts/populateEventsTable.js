import { query } from "../index.js";

export async function populateEvents() {
  const res = await query(
    `INSERT INTO events (name_of_event, event_host, start_time, end_time, description,cost, house_number, street_address, town, region, postcode, lat, long, userAttending) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;`,
    [
      "Brum JS",
      1,
      "2022-07-19 10:30:00",
      "2022-07-19 13:30:00",
      "Talk about Javascript",
      0,
      "27",
      "Cannon street",
      "Birmingham",
      "West Midlands",
      "B2 5EP",
      52.47978,
      -1.89795,
      1,
    ]
  );
  console.log(res.rows[0]);
}

populateEvents();
