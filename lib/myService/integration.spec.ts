import { MyService } from ".";

describe("Integration tests", () => {
  test("My integration test 1", () => {
    const serv = new MyService();
    const res = serv.doSomething();
  });

  test("My integration test 2", () => {
    const serv = new MyService();
    const res = serv.doSomething();
  });
});
