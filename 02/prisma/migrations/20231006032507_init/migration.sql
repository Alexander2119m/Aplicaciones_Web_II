-- CreateTable
CREATE TABLE "Pedido" (
    "idpedido" SERIAL NOT NULL,
    "CI" TEXT NOT NULL,
    "id_repartidor" INTEGER NOT NULL,
    "Fecha" TIMESTAMP(3) NOT NULL,
    "Total" DOUBLE PRECISION NOT NULL,
    "entregado" BOOLEAN NOT NULL,
    "direccion_envio" TEXT NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("idpedido")
);

-- CreateTable
CREATE TABLE "DetallePedido" (
    "iddetalle" SERIAL NOT NULL,
    "idpedido" INTEGER NOT NULL,
    "idproducto" INTEGER NOT NULL,
    "Cantidad" INTEGER NOT NULL,
    "Precio" DOUBLE PRECISION NOT NULL,
    "Subtotal" DOUBLE PRECISION NOT NULL,
    "Costo_envio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "DetallePedido_pkey" PRIMARY KEY ("iddetalle")
);

-- CreateTable
CREATE TABLE "Repartidor" (
    "id_repartidor" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Telefono" TEXT NOT NULL,
    "Correo" TEXT NOT NULL,
    "Cedula" TEXT NOT NULL,

    CONSTRAINT "Repartidor_pkey" PRIMARY KEY ("id_repartidor")
);

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_id_repartidor_fkey" FOREIGN KEY ("id_repartidor") REFERENCES "Repartidor"("id_repartidor") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DetallePedido" ADD CONSTRAINT "DetallePedido_idpedido_fkey" FOREIGN KEY ("idpedido") REFERENCES "Pedido"("idpedido") ON DELETE RESTRICT ON UPDATE CASCADE;
