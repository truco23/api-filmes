import express, { Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import { swaggerOptions } from "./swagger.options";
import "./config/mongo.config";

const app = express();
const port = 8080;

const mongoose = require("mongoose");

const testeModel = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const model = mongoose.model("testeModel", testeModel);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerOptions));

// app.use("/teste", (req: Request, res: Response) => {
//   res.json({ teste: "teste ok :)" });
// });

app.use("/teste", async (req: Request, res: Response) => {
  try {
    const result = await model.find({});
    console.log(result);
    return res.json({ success: result });
  } catch (error) {
    console.log(error);
    return res.json({ fail: error });
  }
});

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
