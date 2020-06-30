import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./swagger.options";

const app = express();
const port = 8080;

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerOptions));

app.use("/teste", (req: Request, res: Response) => {
  res.json({ teste: "teste ok :)" });
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
