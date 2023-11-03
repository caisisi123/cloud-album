"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPictureRouter = void 0;
const MongodbDriver_1 = require("../database/MongodbDriver");
class GetPictureRouter {
    AddRoute(route) {
        route.get('/get', (req, res) => {
            //从mongo数据库获取
            MongodbDriver_1.Picture.distinct('_id').then((result) => {
                res.send(result);
            }).catch((err) => {
                res.send(err);
            });
        });
    }
}
exports.GetPictureRouter = GetPictureRouter;
