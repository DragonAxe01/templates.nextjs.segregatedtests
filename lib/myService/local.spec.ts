import { MyService } from ".";

describe("Local tests 2", () => {
  test("My local test 2", () => {
    const serv = new MyService();
    const res = serv.doSomething();
  });
});
