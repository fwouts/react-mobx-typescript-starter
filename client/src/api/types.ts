export interface AuthRequired {
  Authorization: string;
}

export interface RegisterUserRequest {
  email: string;
  password: string;
}

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  authToken: string;
}

export type RegisterUser_Response = {
  kind: "success";
  data: string;
} | {
  kind: "unauthorized";
  data: string;
} | {
  kind: "failure";
  data: string;
};

export type LoginUser_Response = {
  kind: "success";
  data: LoginUserResponse;
} | {
  kind: "failure";
  data: string;
};
