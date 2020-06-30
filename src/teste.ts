export const getPets = {
  tags: ["Pets"],
  description: "Returns all pets from the system that the user has access to",
  operationId: "getPets",
  summary: "Descrição da rota",
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    "200": {
      description: "A list of pets.",
      content: {
        "application/json": {
          schema: {
            type: "array",
            items: {
              name: "teste",
            },
          },
        },
      },
    },
  },
};
