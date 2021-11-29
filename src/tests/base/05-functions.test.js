import {
  getUser,
  getUsuarioActivo as getActiveUser,
} from "../../base/05-funciones";

describe("05-functions", () => {
  test("should return an object with uid=123, uname=Nahuel", () => {
    const userTest = {
      uid: "123",
      uname: "Nahuel",
    };

    const user = getUser();

    //toStrictEqual para compara objetos
    expect(userTest).toStrictEqual(user);
  });

  test("should return an object with uid=123, uname=Nahuel and active=true", () => {
    const userTest = {
      uid: "123",
      uname: "Nahuel",
      active: true,
    };

    const user = getActiveUser(getUser());

    expect(userTest).toStrictEqual(user);
  });
});
