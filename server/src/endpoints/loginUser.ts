import { LoginUser_Response, LoginUserRequest } from "../api/types";

export async function loginUser(
  request: LoginUserRequest,
): Promise<LoginUser_Response> {
  return {
    kind: "failure",
    data: "Not implemented yet!",
  };
}
