import { query } from "../index.js"

const sqlString = `DROP TABLE IF EXISTS users;`;

export async function dropUsersTable(){
    const res = await query(sqlString)
    console.log(res.command)
}
dropUsersTable()