import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {Mongo} from "./database/MongodbDriver";
import { PictureRouter } from "./router/PictureRouter";
import { Router } from "express";
export abstract class AbstractServer {
    private router: any;
    constructor(private port: number = 3000, private app: any = express(),
                private mongo: Mongo = new Mongo()) {
    }

    public WithCorsSupport(): AbstractServer {
        this.app.use(cors());
        return this;
    }



    public Start(): void {
        this.app.use(bodyParser.json({ limit: `100mb` }));
        this.app.use(bodyParser.urlencoded({ limit: `100mb`, extended: true }));
        this.mongo.Connect();//连接数据库
        this.router = express.Router();
        this.app.use(this.router);
        this.OnStart();
        this.app.listen(this.port, () => console.log(`Express server running on port ${this.port}`));
    }

    protected abstract AddRouting(routerEngine: PictureRouter, router: Router): void;
    protected OnStart(): void {
        //注册路由
        this.AddRouting(new PictureRouter(), this.router);
    }
}