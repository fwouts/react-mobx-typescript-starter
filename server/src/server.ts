import "module-alias/register";

import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import * as types from "./api/types";
import * as validators from "./api/validators";

// start-generated-section endpointImports
import { sayHello } from "./endpoints/sayHello";
// end-generated-section endpointImports

const PORT = 3010;

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: (origin, callback) => {
      callback(null, true);
      // If you want to only allow some origins, use the following instead:
      // callback(new Error(`Access is not allowed from ${origin}.`));
    },
  }),
);

// start-generated-section httpHooks
app.post("/say/hello", async (req, res, next) => {
  try {
    const request: types.SayHelloRequest = req.body;
    if (!validators.validate_SayHelloRequest(request)) {
      throw new Error(`Invalid request: ${JSON.stringify(request, null, 2)}`);
    }
    const response: types.SayHello_Response = await sayHello(request);
    switch (response.kind) {
      case "success":
        if (!validators.validate_SayHelloResponse(response.data)) {
          throw new Error(
            `Invalid response: ${JSON.stringify(response, null, 2)}`,
          );
        }
        res.status(200);
        res.json(response.data);
        break;
      case "failure":
        if (!validators.validate_string(response.data)) {
          throw new Error(
            `Invalid response: ${JSON.stringify(response, null, 2)}`,
          );
        }
        res.status(409);
        res.json(response.data);
        break;
      default:
        throw new Error(
          `Invalid response: ${JSON.stringify(response, null, 2)}`,
        );
    }
  } catch (err) {
    next(err);
  }
});
// end-generated-section httpHooks

// tslint:disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
