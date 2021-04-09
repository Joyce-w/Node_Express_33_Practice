process.env.NODE_ENV = "test";

const request = require("supertest")
const app = require("./app");

describe("POST /", () => {
    test("test post route", async () => {
        const res = await request(app)
            .post("/")
            .send({ "developers": ["joelburton"] })
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([
            {
                "name": "Joel Burton",
                "bio": "Open source developer. Former dev at Apple, Planned Parenthood, Zana. Former VP of Ed at Hackbright. Python, JS, design, cats, tea, but not always in that order"
            }
        ])
    });
})