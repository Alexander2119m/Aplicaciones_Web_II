import { Router } from 'express';


import { RepartidorRoutes } from "./repartidor/routes";


export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    
   
    router.use("/api/repartidor", RepartidorRoutes.routes);
    



    
    return router;
  }


}
