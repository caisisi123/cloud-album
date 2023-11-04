import {IRoute} from "./RouteType";
import {Router} from "express";

//创建并管理routes实例
export class PictureRouter {
    constructor(private routes:IRoute[]=new Array<IRoute>()) {
    }
    public Add<T extends IRoute>(route:IRoute,router:Router)
    {
        route.AddRoute(router);
        this.routes.push(route);
    }
}