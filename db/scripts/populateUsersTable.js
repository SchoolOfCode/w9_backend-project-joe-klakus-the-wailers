import { query } from "../index.js";

export async function populateUsers() {
  const res = await query(
    `INSERT INTO users (first_name, last_name, email, password, house_number, street_address, town, region, postcode) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;`,
    [
      "Miriam",
      "Green",
      "mg@hotmail.com",
      "password",
      "birmingham",
      "birmingham",
      "birmingham",
      "birmingham",
      "birmingham",
    ]
  );
  console.log(res.rows[0]);
}

populateUsers();
