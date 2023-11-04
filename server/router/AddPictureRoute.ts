import {IRoute} from "./RouteType";
import {Picture} from "../database/MongodbDriver";
import {Router} from "express";
import {Request,Response} from "express";
export class AddPictureRoute implements IRoute{
    public AddRoute(router: Router): void {
        router.post('/add',(req:Request,res:Response)=>{
            //上传到mongo数据库
            const picture=new Picture(req.body);
            picture.save().then((result:any)=>{
                res.json(result);
            }).catch((err:any)=>{
                res.send(err);
            })
        })
    }
}