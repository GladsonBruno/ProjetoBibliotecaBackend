import * as express from "express";
import * as dotenv from "dotenv";

dotenv.config();

var app = express();
var server;
var port = process.env.PORT;

server = app.listen(port);
console.log(`API disponível na porta ${process.env.PORT}`)