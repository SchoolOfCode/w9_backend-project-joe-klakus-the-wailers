import { query } from "../index.js";

export async function populateEvents() {
        const res = await query (
            `INSERT INTO events (name_of_event, event_host, start_time, end_time, description,cost, house_number, street_address, town, region, postcode, lat, long, userAttending) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;`,
             ['Brum JS', 1, '2004-10-19 10:23:54', '2004-10-19 13:23:54', 'Meetup for Everyone', 0, 'custard factory', 'birmingham', 'birmingham', 'birmingham', 'birmingham', 
             51.5073509, -0.1277583, 1
            ]
        );
        console.log(res.rows[0])
    }

populateEvents()
