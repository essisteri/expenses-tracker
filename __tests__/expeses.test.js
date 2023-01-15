/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

const {
  describe,
  expect,
  test,
  afterAll,
  beforeAll,
} = require("@jest/globals");
const request = require("supertest");
const app = require("../app");
const connection = require("../db/connection");

describe("The Expenses route", () => {
  describe("GET enpoint", () => {
    test("should return 200 and valid json", async () => {
      const response = await request(app)
        .get("/api/expenses")
        .set("Accept", "application/json");

      expect(response.status).toEqual(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });

    test("should return 1 expense", async () => {
      const response = await request(app)
        .get("/api/expenses/1")
        .set("Accept", "application/json");

      expect(response.status).toEqual(200);
      expect(response.headers["content-type"]).toMatch(/json/);
    });

    test("should return 404 and Not Found", async () => {
      const response = await request(app).get("/api/expenses/101");

      expect(response.status).toEqual(404);
      expect(response.text).toContain("Not Found");
    });
  });

  describe("POST expenses endpoint", () => {
    test("should create a new expense", async () => {
      const expense = {
        date: "2023-01-14",
        amount: "12",
        shop: "testi",
        category: "testi",
      };

      const response = await request(app)
        .post("/api/expenses")
        .set("Accept", "application/json")
        .send(expense);

      expect(response.status).toEqual(200);

      expect(response.body.date).toEqual("2023-01-14");
      expect(response.body.amount).toEqual("12");
      expect(response.body.shop).toEqual("testi");
      expect(response.body.category).toEqual("testi");
    });
  });

  describe("DELETE expenses endpoint", () => {
    test("should delete the expense by id", async () => {
      const response = await request(app)
        .delete("/api/expenses/1")
        .set("Accept", "application/json");
      expect(response.status).toEqual(200);
    });
  });

  describe("PUT expenses endpoint", () => {
    test("should update the expense with the id", async () => {
      const expense = {
        id: 3,
        date: "2023-01-14",
        amount: "12.34",
        shop: "testi123",
        category: "testi123",
      };
      const response = await request(app)
        .put("/api/expenses")
        .set("Accept", "application/json")
        .send(expense);
      expect(response.status).toEqual(200);
    });

    test("should check that expense with id exists", async () => {
      const expense = {
        id: 1000000,
        date: "2023-01-14",
        amount: "12.34",
        shop: "testi123",
        category: "testi123",
      };
      const response = await request(app)
        .put("/api/expenses")
        .set("Accept", "application/json")
        .send(expense);
      expect(response.status).toEqual(404);
      expect(response.text).toEqual("Not Found");
    });
  });

  afterAll(() => {
    connection.end();
  });
});
