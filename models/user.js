import { query } from "../db/index.js";

//Regular function format
// export async function getUsers(){
//     return [{userID : 1 , Name : "Joe"}, 
//     {userID : 2 , Name : "Bob"}] 
// }

//Selects all users from the users table (GET)
export const getUsers = async() =>{
const data  = await query(`SELECT * FROM users;`);
return data.rows;
}

//Creates a new user in the users table(POST)
export const createUser = async(newUser) =>{
    //destructured
    const {first_name , last_name, email , password , region } = newUser;
    const data  = await query(`INSERT INTO users (first_name, last_name , email , password , region ) VALUES ($1, $2, $3, $4, $5) 
    RETURNING *;`,[first_name, last_name, email, password, region]);
    //console.log(data.rows);
    return data.rows;

    }

//Update user details (PATCH)


//Delete user from the users table
export const deleteUser = async(id) => {
    const data = await query(`DELETE FROM users WHERE user_id = $1 RETURNING *;`,[id]);
}

