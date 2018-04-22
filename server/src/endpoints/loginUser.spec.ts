import { loginUser } from "@/endpoints/loginUser";
import "jest";

test("endpoint fails", async () => {
  const response = await loginUser({
    email: "hello@gmail.com",
    password: "passw0rd",
  });
  expect(response).toMatchObject({
    kind: "failure",
    data: "Not implemented yet!",
  });
});
