import { IRouter } from "./RouterType";
import { Picture } from "../database/MongodbDriver";
import {Request,Response} from "express";
import {Router} from "express";
export class FindPictureByIdRoute implements IRouter{
    public AddRoute(route: Router): void {
        route.get('/id/:id',(req:Request,res:Response)=>{
            Picture.findOne({_id:req.params.id},{_id:0}).then((result:any)=>{
                if(result.image!==undefined)
                    res.json(result);
            }).catch((err:any)=>{
                res.send(err);
            })
        })
    }
}