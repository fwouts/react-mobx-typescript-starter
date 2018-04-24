export interface SayHelloRequest {
  name: string;
}

export interface SayHelloResponse {
  english: string;
  spanish: string;
}

export type SayHello_Response =
  | {
      kind: "success";
      data: SayHelloResponse;
    }
  | {
      kind: "failure";
      data: string;
    };
