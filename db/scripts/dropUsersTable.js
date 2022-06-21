import { query } from "../index.js"

const sqlString = `DROP TABLE IF EXISTS users;`;

async function dropUsersTable(){
    const res = await query(sqlString)
    console.log(res.command)
}
dropUsersTable()