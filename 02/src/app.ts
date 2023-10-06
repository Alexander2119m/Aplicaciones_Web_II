import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const crearPedido = async () => {
    const PedidoCreado = await prisma.pedido.create({
        data: {
            CI: "123456789", 
            Fecha: new Date(), 
            Total: 100.50, 
            entregado: false, 
            direccion_envio: "Calle Principal #123", 
            repartidor: { 
                create: {
                    Nombre: "Adonis Suarez",
                    Telefono: "123456789",
                    Correo: "adonissuarez@gmail.com",
                    Cedula: "1234567890" 
                }
            },
            detalles: { 
                create: [
                    {
                        idproducto: 1, 
                        Cantidad: 2, 
                        Precio: 25.25, 
                        Subtotal: 50.50, 
                        Costo_envio: 5.00 
                    },
                 
                ]
            }
        }
    });
    console.log(PedidoCreado);
};

const leerPedido = async () => {
    const pedido = await prisma.pedido.findMany({
        include: {
            repartidor: true,
            detalles: true
        },
        where: {
            idpedido: 1
        }
    });
    console.log(pedido);
};

const actualizarPedido = async () => {
    const pedido = await prisma.pedido.update({
        data: {
            Fecha: new Date("2023-10-05"), 
            entregado: true 
        },
        where: {
            idpedido: 1
        }
    });
    console.log("El pedido ha sido actualizado");
};

const eliminarPedido = async () => {
    const pedido = await prisma.pedido.delete({
        where: {
            idpedido: 1
        }
    });
    console.log("Se ha eliminado el pedido con ID 2");
};

(async () => {
    
     await crearPedido(); 
    // await leerPedido();
    // await actualizarPedido();
    // await eliminarPedido();
})();



