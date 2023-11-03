"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const AddPictureRoute_1 = require("./router/AddPictureRoute");
const FindPictureByIdRoute_1 = require("./router/FindPictureByIdRoute");
const GetPictureRoute_1 = require("./router/GetPictureRoute");
const AbstractServer_1 = require("./AbstractServer");
const fs_1 = __importDefault(require("fs"));
class Server extends AbstractServer_1.AbstractServer {
    AddRouting(Picturerouter, router) {
        Picturerouter.Add(new AddPictureRoute_1.AddPictureRoute(), router);
        Picturerouter.Add(new FindPictureByIdRoute_1.FindPictureByIdRoute(), router);
        Picturerouter.Add(new GetPictureRoute_1.GetPictureRoute(), router);
    }
}
exports.Server = Server;
new Server().WithCorsSupport().Start();
// 创建一个可写流，将数据写入到文件中
const fileStream = fs_1.default.createWriteStream('output.txt');
// 通过重定向标准输出流到文件流实现输出到文件
process.stdout.pipe(fileStream);
// 当不再需要重定向时，关闭文件流
process.stdout.on('end', () => {
    fileStream.end();
});
