import axios, { AxiosError } from "axios";
import * as types from "./api/types";
import * as validators from "./api/validators";

const URL = process.env.REACT_APP_API_URL;
if (!URL) {
  throw new Error(`Missing environment variable REACT_APP_API_URL.`);
}

// start-generated-section endpoints
export async function sayHello(
  request: types.SayHelloRequest,
): Promise<types.SayHello_Response> {
  if (!validators.validate_SayHelloRequest(request)) {
    throw new Error(`Invalid request: ${JSON.stringify(request, null, 2)}`);
  }
  const url = `${URL}/say/hello`;
  let data: any;
  let statusCode: number;
  let statusText: string;
  try {
    const response = await axios({
      url,
      method: "POST",
      responseType: "json",
      data: request,
    });
    data = response.data;
    statusCode = response.status;
    statusText = response.statusText;
  } catch (e) {
    const axiosError = e as AxiosError;
    if (axiosError.response) {
      data = axiosError.response.data;
      statusCode = axiosError.response.status;
      statusText = axiosError.response.statusText;
    } else {
      statusCode = 503;
      statusText = axiosError.code || axiosError.message;
    }
  }
  switch (statusCode) {
    case 200:
      if (!validators.validate_SayHelloResponse(data)) {
        throw new Error(`Invalid response: ${JSON.stringify(data, null, 2)}`);
      }
      return {
        kind: "success",
        data,
      };
    case 409:
      if (!validators.validate_string(data)) {
        throw new Error(`Invalid response: ${JSON.stringify(data, null, 2)}`);
      }
      return {
        kind: "failure",
        data,
      };
    default:
      throw new Error(`Unexpected status: ${statusCode} ${statusText}`);
  }
}
// end-generated-section endpoints
