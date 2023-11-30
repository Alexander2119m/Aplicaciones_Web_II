"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./pedido/routes");
const routes_2 = require("./repartidor/routes");
const routes_3 = require("./detallepedido/routes");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        router.use("/api/pedidos", routes_1.PedidoRoutes.routes);
        router.use("/api/repartidor", routes_2.RepartidorRoutes.routes);
        router.use("/api/detallepedido", routes_3.DetallePedidoRoutes.routes);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
