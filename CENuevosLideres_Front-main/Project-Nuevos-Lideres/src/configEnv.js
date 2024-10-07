const schemaEnv = {
    type: "object",
    required: [
      "PORT",
      "HOST",
      "MONGO_URI",
      "TOKEN_PASSWORD",
    ],
    properties: {
      PORT: {
        type: "number",
      },
      HOST: {
        type: "string",
      },
      MONGO_URI: {
        type: "string",
      },
      TOKEN_PASSWORD: {
        type: "string",
      },
    },
  };
  
  export const optionsEnv = {
    schema: schemaEnv,
    dotenv: true,
  };