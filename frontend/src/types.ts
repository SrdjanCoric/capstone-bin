export interface RequestData {
  method: string;
  requestTime: string;
  headers: {
    "content-type": string;
    "user-agent": string;
    accept: string;
    "postman-token"?: string;
    host: string;
    "accept-encoding": string;
    connection: string;
    "content-length": string;
  };
  body: string; // Use the parsed body type here
}
