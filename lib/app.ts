import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import * as mongoose from "mongoose";

import * as WebSocket from 'ws';

import * as http from 'http';
// import { SeverConfig } from "config/config";

import _ = require("./config/config");

class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();
    // public mongoUrl: string = 'mongodb://localhost:27017/CRMdb';

    public mongoUrl: string = _.SeverConfig.databaseLink;

    public serv = http.createServer(this.app);

    constructor() {
        this.config();
        this.mongoSetup();
        this.wsConfig();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // serving static files 
        this.app.use(express.static('public'));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useFindAndModify: false });
    }

    public wsConfig() {
        const wss = new WebSocket.Server({ port: _.SeverConfig.wsPORT });
        wss.on('connection', (ws: WebSocket) => {
            //connection is up, let's add a simple simple event
            ws.on('message', (message: string) => {
                //log the received message and send it back to the client
                console.log('Recebido: %s', message);
                ws.send(`Você mandou -> ${message}`);
            });
            //send immediatly a feedback to the incoming connection    
            // ws.send('Hi there, I am a WebSocket server');
            console.log("WS conectado na porta: " + _.SeverConfig.wsPORT);
        });
    }
}

export default new App().app;