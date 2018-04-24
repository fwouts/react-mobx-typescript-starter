import { SayHello_Response, SayHelloRequest } from "../api/types";

export async function sayHello(
  request: SayHelloRequest,
): Promise<SayHello_Response> {
  if (!request.name) {
    return {
      kind: "failure",
      data: "Name is empty!",
    };
  }
  return {
    kind: "success",
    data: {
      english: `Hi ${request.name}!`,
      spanish: `¡Hola ${request.name}!`,
    },
  };
}
