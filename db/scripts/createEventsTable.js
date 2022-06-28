import { query } from "../index.js"

const sqlString = `CREATE TABLE IF NOT EXISTS events(
    img_url VARCHAR,
    events_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    name_of_event VARCHAR, 
    event_host INT NOT NULL REFERENCES users (user_id), 
    name_of_event_host VARCHAR,
    start_time TIMESTAMP, 
    end_time TIMESTAMP,
    description VARCHAR,
    cost INT,
    house_number VARCHAR, 
    street_address VARCHAR, 
    town VARCHAR, 
    region VARCHAR, 
    postcode VARCHAR,
    lat DECIMAL,
    long DECIMAL,
    userAttending INT NOT NULL REFERENCES users (user_id)
    );`;

export async function createEventsTable(){
    const res = await query(sqlString)
    console.log(res.command)
}
createEventsTable()
