"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutingEngine = void 0;
//创建并管理路由实例
class RoutingEngine {
    constructor(routers = new Array()) {
        this.routers = routers;
    }
    Add(routing, route) {
        const router = new routing();
        router.AddRoute(route);
        this.routers.push(router);
    }
}
exports.RoutingEngine = RoutingEngine;
