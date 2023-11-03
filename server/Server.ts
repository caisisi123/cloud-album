import {PictureRouter} from "./router/PictureRouter";
import {AddPictureRoute} from "./router/AddPictureRoute";
import {FindPictureByIdRoute} from "./router/FindPictureByIdRoute";
import {GetPictureRoute} from "./router/GetPictureRoute";
import {AbstractServer} from "./AbstractServer";
import {Router} from "express";
import fs from "fs";
export class Server extends AbstractServer{
    protected AddRouting(Picturerouter: PictureRouter, router: Router): void {
        Picturerouter.Add(new AddPictureRoute(),router);
        Picturerouter.Add(new FindPictureByIdRoute(),router);
        Picturerouter.Add(new GetPictureRoute(),router);
    }
}
new Server().WithCorsSupport().Start();

// 创建一个可写流，将数据写入到文件中
const fileStream = fs.createWriteStream('output.txt');
// 通过重定向标准输出流到文件流实现输出到文件
process.stdout.pipe(fileStream);
// 当不再需要重定向时，关闭文件流
process.stdout.on('end', () => {
    fileStream.end();
});