"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PictureRouter = void 0;
//创建并管理routes实例
class PictureRouter {
    constructor(routes = new Array()) {
        this.routes = routes;
    }
    Add(route, router) {
        route.AddRoute(router);
        this.routes.push(route);
    }
}
exports.PictureRouter = PictureRouter;
