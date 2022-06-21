import { query } from "../index.js";

async function populateUsers() {
        const res = await query (
            `INSERT INTO users (name_of_event, event_host, start_time, end_time, description,cost, address, lat, lon, userAttending) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
             ['Brum JS', '1', '2004-10-19 10:23:54', '2004-10-19 13:23:54', 'Meetup for Everyone', 0, 'custard factory', 
             51.5073509, -0.1277583, 1
            ]
        );
        console.log(res.rows[0])
    }

populateUsers()
