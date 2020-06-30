import { getPets } from "./teste";

export const swaggerOptions = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "API Movies",
    description: "API for movies",
  },
  components: {
    schemas: {},
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  tags: [
    {
      name: "Pets",
    },
  ],
  paths: {
    "/teste": {
      get: getPets,
    },
  },
};
