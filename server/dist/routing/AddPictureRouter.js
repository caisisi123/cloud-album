"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddPictureRouter = void 0;
const MongodbDriver_1 = require("../database/MongodbDriver");
class AddPictureRouter {
    AddRoute(route) {
        route.post('/add', (req, res) => {
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
exports.AddPictureRouter = AddPictureRouter;
