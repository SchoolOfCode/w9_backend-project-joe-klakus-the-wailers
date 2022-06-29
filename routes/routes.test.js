import request from "supertest";
import app from "../app.js";
import { test, expect } from "@jest/globals";
import { pool } from "../db/index.js";

// beforeAll (() => {dropEventsTable})

afterAll(() => { pool.end() });
///USERS ROUTES
describe("Test the GET route for users", ()=>{
    test("Checks if the HTTP status code is 200", async()=>{
        const response = await request(app).get("/users")
        expect(response.statusCode).toBe(200);
    })
    test("Checks the POST request for users is 200 and body is successfully returned", async () => {
        const data =    
        {
            first_name: "Buddy",
            last_name: "Green",
            email: "gtfgffg@hotmail.com",
            password: "password1",
            house_number: "birmingham",
            street_address: "birmingham",
            town: "birmingham",
            region: "birmingham",
            postcode: "birmingham"
            
          }
        
        const response = await request(app).post("/users/").send(data)

        expect(response.statusCode).toBe(200)
        expect(response.body.Success).toEqual(true)
    })
    test("Checks the PATCH request for users is 200 and body is successfully returned", async () => {
        const data =    
        {
            first_name: "New Person",
            last_name: "Green",
            email: "gtfgffg@hotmail.com",
            password: "password1",
            house_number: "birmingham",
            street_address: "birmingham",
            town: "birmingham",
            region: "birmingham",
            postcode: "birmingham"
          }
        
        const response = await request(app).patch("/users/1").send(data)

        expect(response.statusCode).toBe(200)
        expect(response.body.Success).toEqual(true)
    })
    test("Checks the response's to a delete", async () => {
        const response = await request(app).delete("/users/5")
        expect(response.statusCode).toBe(200)
        expect(response.body.Success).toEqual(true)
    })
});
///EVENTS ROUTES
describe("Test the GET route for events", () => {
  test("Checks if the HTTP status code is 200", async () => {
    const response = await request(app).get("/events");
    expect(response.statusCode).toBe(200);
  });
  test("Checks the POST request for events is 200 and body is successfully returned", async () => {
    const data = {
      name_of_event: "This is 2",
      event_host: 1,
      start_time: "2004-10-19T09:23:54.000Z",
      end_time: "2004-10-19T12:23:54.000Z",
      description: "Meetup for Everyone",
      cost: 0,
      house_number: "factory",
      street_address: "birmingham",
      town: "birmingham",
      region: "birmingham",
      postcode: "birmingham",
      lat: "51.5073509",
      long: "-0.1277583",
      userAttending: 1,
    };

    const response = await request(app).post("/events").send(data);

    expect(response.statusCode).toBe(200);
    expect(response.body.Success).toEqual(true);
  });
  test("Checks the Patch request for events is 200 and body is successfully returned", async () => {
    const data = {
      name_of_event: "This is 2",
      event_host: 1,
      start_time: "2004-10-19T09:23:54.000Z",
      end_time: "2004-10-19T12:23:54.000Z",
      description: "Meetup for Everyone",
      cost: 0,
      house_number: "factory",
      street_address: "birmingham",
      town: "birmingham",
      region: "birmingham",
      postcode: "birmingham",
      lat: "51.5073509",
      long: "-0.1277583",
      userAttending: 1,
    };

    const response = await request(app).patch("/events/2").send(data);

    expect(response.statusCode).toBe(200);
    expect(response.body.Success).toEqual(true);
  });
  test("Checks the response's to a delete", async () => {
    const response = await request(app).delete("/events/5");
    expect(response.statusCode).toBe(200);
    expect(response.body.Success).toEqual(true);
  });
});

//AUTH TEST ROUTES
describe("Test the POST route for auth", () => {
  test("Checks the POST request for auth is 200 recieved if password is correct", async () => {
    const data = {
      username: "admin@email.com",
      password: "password1",
    };
    const response = await request(app).post("/login").send(data);
    expect(response.statusCode).toBe(200);
  });
  });
  describe("Test the GET route for auth", () => {
    test("Checks the GET request for auth is 403 as no access token is sent", async () => {

      const response = await request(app).get("/refresh_token")
      expect(response.statusCode).toBe(403);
    });
    });
  describe("Test the DELETE route for auth", () => {
    test("Checks the DELETE request for auth is 200", async () => {

      const response = await request(app).delete("/refresh_token")
      expect(response.statusCode).toBe(200);
    });
    });


