import { query } from "../db/index.js";
import bcrypt from "bcrypt";

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
    const emailCheck = await query(`SELECT * FROM users WHERE email = $1`,[email])
    if (emailCheck.rows.length === 0){
    const hash = await bcrypt.hash(password,10);
    const data  = await query(`INSERT INTO users (first_name, last_name , email , password , region ) VALUES ($1, $2, $3, $4, $5) 
    RETURNING *;`,[first_name, last_name, email, hash, region]);
    //console.log(data.rows);
    return data.rows;
    }else{
        console.log("Email Exists")//To Do!! 
    }
}
//Update user details (PATCH)
// UPDATE A USER BY ID
export const  updateUser = async (updatedUser, id) => {
    const { first_name, last_name, email, password, region } = updatedUser;
    const hash = await bcrypt.hash(password,10);
    const userUpdate = await query(`SELECT * FROM users WHERE user_id = ${id}`)
    if (first_name) {
        await query (`UPDATE users SET first_name = $1 WHERE user_id = ${id};`,
        [first_name] )
    }
    if (last_name) {
        await query (`UPDATE users SET last_name = $1 WHERE user_id = ${id};`,
        [last_name] )
    }
    if (email) {
        await query (`UPDATE users SET email = $1 WHERE user_id = ${id};`,
        [email] )
    }
    if (password) {
        await query (`UPDATE users SET password = $1 WHERE user_id = ${id};`,
        [hash] )
    }
    if (region) {
        await query (`UPDATE users SET region = $1 WHERE user_id = ${id};`,
         [region])
    }
    if (userUpdate) {
       return userUpdate.rows;
    } 
}
//^^Doesn't return the changes of the new user (Check the browser version or the database)

//Delete user from the users table
export const deleteUser = async(id) => {
    const data = await query(`DELETE FROM users WHERE user_id = $1 RETURNING *;`,[Number(id)]);
}

