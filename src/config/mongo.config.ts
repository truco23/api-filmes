import { connect, connection } from "mongoose";

connect(
  "mongodb://movies:movies@localhost:27017/movies",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (!error) return;
    console.log("Falha na conexão", error);
  }
);

connection.on("connected", function () {
  console.log("conectado ao Mongo");
});

connection.on("error", function (erro) {
  console.log("Erro na conecção " + erro);
});

connection.on("disconnected", function () {
  console.log("Desconectado do Mongo");
});

process.on("SIGINT", function () {
  connection.close(function () {
    console.log("Conexão finalizada pelo terminal da aplicação");
    process.exit(0);
  });
});
