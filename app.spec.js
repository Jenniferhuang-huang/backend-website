const request = require("supertest");
const app = require("./app");

describe("Test", () => {
  it(`Returns all todos`, async (done) => {
    await request(app)
      .get("/login")
      .expect(200)
      .then((response) => {
        expect(response.body.length).toBe(3);
      });
    done();
  });
});
