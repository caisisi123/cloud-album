"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPictureRoute = void 0;
const MongodbDriver_1 = require("../database/MongodbDriver");
class AddPictureRoute {
    AddRoute(router) {
        router.post('/add', (req, res) => {
            //上传到mongo数据库
            const picture = new MongodbDriver_1.Picture(req.body);
            picture.save().then((result) => {
                res.json(result);
            }).catch((err) => {
                res.send(err);
            });
        });
    }
}
exports.AddPictureRoute = AddPictureRoute;
