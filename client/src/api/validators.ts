import * as types from "./types";

export function validate_AuthRequired(value: any): value is types.AuthRequired {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_AuthRequired_Authorization(value.Authorization)) {
    return false;
  }
  return true;
}

export function validate_AuthRequired_Authorization(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUserRequest(value: any): value is types.RegisterUserRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_RegisterUserRequest_email(value.email)) {
    return false;
  }
  if (!validate_RegisterUserRequest_password(value.password)) {
    return false;
  }
  return true;
}

export function validate_RegisterUserRequest_email(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUserRequest_password(value: any): boolean {
  return typeof value === "string";
}

export function validate_LoginUserRequest(value: any): value is types.LoginUserRequest {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_LoginUserRequest_email(value.email)) {
    return false;
  }
  if (!validate_LoginUserRequest_password(value.password)) {
    return false;
  }
  return true;
}

export function validate_LoginUserRequest_email(value: any): boolean {
  return typeof value === "string";
}

export function validate_LoginUserRequest_password(value: any): boolean {
  return typeof value === "string";
}

export function validate_LoginUserResponse(value: any): value is types.LoginUserResponse {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_LoginUserResponse_authToken(value.authToken)) {
    return false;
  }
  return true;
}

export function validate_LoginUserResponse_authToken(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUser_Response(value: any): value is types.RegisterUser_Response {
  if (validate_RegisterUser_Response_0(value)) {
    return true;
  }
  if (validate_RegisterUser_Response_1(value)) {
    return true;
  }
  if (validate_RegisterUser_Response_2(value)) {
    return true;
  }
  return false;
}

export function validate_RegisterUser_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_RegisterUser_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_RegisterUser_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_RegisterUser_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_RegisterUser_Response_0_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUser_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_RegisterUser_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_RegisterUser_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_RegisterUser_Response_1_kind(value: any): boolean {
  return value === "unauthorized";
}

export function validate_RegisterUser_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_RegisterUser_Response_2(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_RegisterUser_Response_2_kind(value.kind)) {
    return false;
  }
  if (!validate_RegisterUser_Response_2_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_RegisterUser_Response_2_kind(value: any): boolean {
  return value === "failure";
}

export function validate_RegisterUser_Response_2_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_LoginUser_Response(value: any): value is types.LoginUser_Response {
  if (validate_LoginUser_Response_0(value)) {
    return true;
  }
  if (validate_LoginUser_Response_1(value)) {
    return true;
  }
  return false;
}

export function validate_LoginUser_Response_0(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_LoginUser_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_LoginUser_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_LoginUser_Response_0_kind(value: any): boolean {
  return value === "success";
}

export function validate_LoginUser_Response_0_data(value: any): boolean {
  return validate_LoginUserResponse(value);
}

export function validate_LoginUser_Response_1(value: any): boolean {
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (!validate_LoginUser_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_LoginUser_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_LoginUser_Response_1_kind(value: any): boolean {
  return value === "failure";
}

export function validate_LoginUser_Response_1_data(value: any): boolean {
  return typeof value === "string";
}

export function validate_bool(value: any): value is boolean {
  return typeof value === "boolean";
}

export function validate_int(value: any): value is number {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_long(value: any): value is number {
  return typeof value === "number" && Number.isInteger(value);
}

export function validate_float(value: any): value is number {
  return typeof value === "number";
}

export function validate_double(value: any): value is number {
  return typeof value === "number";
}

export function validate_string(value: any): value is string {
  return typeof value === "string";
}

export function validate_null(value: any): value is null {
  return value === null;
}
