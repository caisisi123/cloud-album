import {Picture} from "../database/MongodbDriver";
import {IRouter} from "./RouterType";
import {Request,Response} from "express";
import {Router} from "express";
export class GetPictureRoute implements IRouter{
    public AddRoute(route: Router): void {
        route.get('/get',(req:Request,res:Response)=>{
            //从mongo数据库获取
           Picture.distinct('_id').then((result:any)=>{
                 res.send(result);
           }).catch((err:any)=>{
               res.send(err);
           })
        })
    }
}