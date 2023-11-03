"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindPictureById = void 0;
const MongodbDriver_1 = require("../database/MongodbDriver");
class FindPictureById {
    AddRoute(route) {
        route.get('id/:id', (req, res) => {
            MongodbDriver_1.Picture.findOne({ _id: req.params.id }, { _id: 0 }).then((result) => {
                res.json(result);
            }).catch((err) => {
                res.send(err);
            });
        });
    }
}
exports.FindPictureById = FindPictureById;
