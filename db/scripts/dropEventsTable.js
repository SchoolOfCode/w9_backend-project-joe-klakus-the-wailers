import { query } from "../index.js"

const sqlString = `DROP TABLE IF NOT EXISTS events;`;

async function dropEventsTable(){
    const res = await query(sqlString)
    console.log(res.command)
}
dropEventsTable()