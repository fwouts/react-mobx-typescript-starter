import { sayHello } from "@/endpoints/sayHello";
import "jest";

test("endpoint fails with empty name", async () => {
  const response = await sayHello({
    name: "",
  });
  expect(response).toMatchObject({
    kind: "failure",
    data: "Name is empty!",
  });
});

test("endpoint works with present name", async () => {
  const response = await sayHello({
    name: "Frank",
  });
  expect(response).toMatchObject({
    kind: "success",
    data: {
      english: "Hi Frank!",
      spanish: "¡Hola Frank!",
    },
  });
});
