import supertest from "supertest";
import * as userFactory from "../../factories/userFactory";
import app from "../../src/app";

describe("Testa registro de usuário.", () => {
  it("Deve retornar 201, se cadastrado um usuário no formato correto", async () => {
    const user = await userFactory.createUser();

    const result = await supertest(app).post("/user/register").send(user);

    expect(result.status).toBe(201);
  });
});
