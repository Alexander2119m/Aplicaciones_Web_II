import { Router } from 'express';

import { PedidoRoutes } from "./pedido/routes";
import { RepartidorRoutes } from "./repartidor/routes";
import { DetallePedidoRoutes } from "./detallepedido/routes";

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    
    router.use("/api/pedidos", PedidoRoutes.routes);
    router.use("/api/repartidor", RepartidorRoutes.routes);
    router.use("/api/detallepedido", DetallePedidoRoutes.routes);



    
    return router;
  }


}
