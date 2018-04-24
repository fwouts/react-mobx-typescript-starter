import * as types from "./types";

export function validate_SayHelloRequest(value: any): value is types.SayHelloRequest {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (!validate_SayHelloRequest_name(value.name)) {
    return false;
  }
  return true;
}

export function validate_SayHelloRequest_name(value: any): boolean {
  return typeof value === 'string';
}

export function validate_SayHelloResponse(value: any): value is types.SayHelloResponse {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (!validate_SayHelloResponse_english(value.english)) {
    return false;
  }
  if (!validate_SayHelloResponse_spanish(value.spanish)) {
    return false;
  }
  return true;
}

export function validate_SayHelloResponse_english(value: any): boolean {
  return typeof value === 'string';
}

export function validate_SayHelloResponse_spanish(value: any): boolean {
  return typeof value === 'string';
}

export function validate_SayHello_Response(value: any): value is types.SayHello_Response {
  if (validate_SayHello_Response_0(value)) {
    return true;
  }
  if (validate_SayHello_Response_1(value)) {
    return true;
  }
  return false;
}

export function validate_SayHello_Response_0(value: any): boolean {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (!validate_SayHello_Response_0_kind(value.kind)) {
    return false;
  }
  if (!validate_SayHello_Response_0_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_SayHello_Response_0_kind(value: any): boolean {
  return value === 'success';
}

export function validate_SayHello_Response_0_data(value: any): boolean {
  return validate_SayHelloResponse(value);
}

export function validate_SayHello_Response_1(value: any): boolean {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (!validate_SayHello_Response_1_kind(value.kind)) {
    return false;
  }
  if (!validate_SayHello_Response_1_data(value.data)) {
    return false;
  }
  return true;
}

export function validate_SayHello_Response_1_kind(value: any): boolean {
  return value === 'failure';
}

export function validate_SayHello_Response_1_data(value: any): boolean {
  return typeof value === 'string';
}

export function validate_bool(value: any): value is boolean {
  return typeof value === 'boolean';
}

export function validate_int(value: any): value is number {
  return typeof value === 'number' && Number.isInteger(value);
}

export function validate_long(value: any): value is number {
  return typeof value === 'number' && Number.isInteger(value);
}

export function validate_float(value: any): value is number {
  return typeof value === 'number';
}

export function validate_double(value: any): value is number {
  return typeof value === 'number';
}

export function validate_string(value: any): value is string {
  return typeof value === 'string';
}

export function validate_null(value: any): value is null {
  return value === null;
}