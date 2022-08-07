import "reflect-metadata"
import * as express from "express";
import * as dotenv from "dotenv";
import { DataSource } from "typeorm"
import * as cors from 'cors';
import * as bodyParser from "body-parser";
import { OrmConfig } from './ormconfig';

dotenv.config();

const options: cors.CorsOptions = {
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'X-Access-Token',
    ],
//    credentials: true,
    methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
    origin: '*',
    preflightContinue: false,
};

var app = express();
var server;
app.use(cors(options));
app.use(bodyParser.json());
var port = process.env.PORT;

const AppDataSource = new DataSource(OrmConfig);

AppDataSource.initialize().then(() => {
    
    server = app.listen(port);
    console.log(`API disponível na porta ${process.env.PORT}`);

}).catch((error) => console.log(error))