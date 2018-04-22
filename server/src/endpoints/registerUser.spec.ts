import { registerUser } from "@/endpoints/registerUser";
import "jest";

test("endpoint fails", async () => {
  const response = await registerUser({
    email: "hello@gmail.com",
    password: "passw0rd",
  });
  expect(response).toMatchObject({
    kind: "failure",
    data: "Not implemented yet!",
  });
});
