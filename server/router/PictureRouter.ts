import {IRouter} from "./RouterType";
import {Router} from "express";

//创建并管理routes实例
export class PictureRouter {
    constructor(private routes:IRouter[]=new Array<IRouter>()) {
    }
    public Add<T extends IRouter>(route:IRouter,router:Router)
    {
        route.AddRoute(router);
        this.routes.push(route);
    }
}