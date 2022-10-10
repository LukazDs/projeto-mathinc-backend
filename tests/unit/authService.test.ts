import * as authRepository from "../../src/repositories/authRepository";
import * as userFactory from "../../factories/userFactory";
import * as authSevice from "../../src/services/authService";

describe("Testa cadatro do usuário", () => {
  it("Testa cadastro do usuário em caso de sucesso", async () => {
    const user = await userFactory.createUser();

    jest.spyOn(authRepository, "insertUser").mockImplementationOnce((): any => {
      return { ...user, id: 1 };
    });

    await authSevice.insertUser(user);

    expect(authRepository.insertUser).toBeCalled();
  });
});
