import { MyService } from ".";

describe("Local tests 1", () => {
  test("My local test 1", () => {
    const serv = new MyService();
    const res = serv.doSomething();
  });
});
