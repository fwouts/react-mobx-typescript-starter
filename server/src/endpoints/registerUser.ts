import { RegisterUser_Response, RegisterUserRequest } from "../api/types";

export async function registerUser(
  request: RegisterUserRequest,
): Promise<RegisterUser_Response> {
  return {
    kind: "failure",
    data: "Not implemented yet!",
  };
}
