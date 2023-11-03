"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const MongodbDriver_1 = require("./database/MongodbDriver");
const PictureRouter_1 = require("./router/PictureRouter");
class AbstractServer {
    constructor(port = 3000, app = (0, express_1.default)(), mongo = new MongodbDriver_1.Mongo()) {
        this.port = port;
        this.app = app;
        this.mongo = mongo;
    }
    WithCorsSupport() {
        this.app.use((0, cors_1.default)());
        return this;
    }
    Start() {
        this.app.use(body_parser_1.default.json({ limit: `100mb` }));
        this.app.use(body_parser_1.default.urlencoded({ limit: `100mb`, extended: true }));
        this.mongo.Connect(); //连接数据库
        this.router = express_1.default.Router();
        this.app.use(this.router);
        this.OnStart();
        this.app.listen(this.port, () => console.log(`Express server running on port ${this.port}`));
    }
    OnStart() {
        //注册路由
        this.AddRouting(new PictureRouter_1.PictureRouter(), this.router);
    }
}
exports.AbstractServer = AbstractServer;
