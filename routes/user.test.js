import {test , expect} from "@jest/globals";
import request from "supertest";
import app from "../app.js";

describe("Test the GET route for users", ()=>{
    test("Checks if the HTTP status code is 200", async()=>{
        const response = await request(app).get("/users")
        expect(response.statusCode).toBe(200);
    })
})