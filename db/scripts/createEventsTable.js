import { query } from "../index.js"

const sqlString = `CREATE TABLE IF NOT EXISTS events(
    events_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    name_of_event VARCHAR, 
    event_host INT NOT NULL UNIQUE REFERENCES users (user_id), 
    start_time TIMESTAMP, 
    end_time TIMESTAMP,
    description VARCHAR,
    cost INT,
    address VARCHAR,
    lat DECIMAL,
    long DECIMAL,
    userAttending INT NOT NULL UNIQUE REFERENCES users (user_id)
    );`;

async function createEventsTable(){
    const res = await query(sqlString)
    console.log(res.command)
}
createEventsTable()
