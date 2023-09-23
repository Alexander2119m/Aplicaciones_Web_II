import { IdPedido } from "./interfaces/IPedido"

const miPedido: IdPedido []= [ 
  {
    IdPedido: 1,
    CI: '1308917345',
    IdRepartidor: 10,
    Fecha: new Date(),
    Total: 50.0,
    Entregado: 'En camino',
    DireccionEnvio: '10 de Agosto y Pichincha'
  },
  {
    IdPedido: 2,
    CI: '1302349345',
    IdRepartidor: 12,
    Fecha: new Date(),
    Total: 97.0,
    Entregado: 'Entregado',
    DireccionEnvio: 'Ciudadela Santa Paula AV 5ta y calle 14'
  },
  {
    IdPedido: 3,
    CI: '1303174678',
    IdRepartidor: 14,
    Fecha: new Date(),
    Total: 43.0,
    Entregado: 'En camino',
    DireccionEnvio: 'Av 9 de Octubre y Pedro Moncayo'
  },
  {
    IdPedido: 4,
    CI: '1319704567',
    IdRepartidor: 16,
    Fecha: new Date(),
    Total: 75.0,
    Entregado: 'Cancelado',
    DireccionEnvio: 'Calle S/N de general Proaño'
  }

]



console.log("Usando forEach:");
for (let i = 0; i < 1; i++) {
  miPedido.forEach((pedido) => {
    console.log("ID de Pedido:", pedido.IdPedido, "CI:", pedido.CI, "ID de Repartidor:", pedido.IdRepartidor,
      "Fecha:", pedido.Fecha, "Total:", pedido.Total, "Entregado:", pedido.Entregado, "Dirección de Envío:", pedido.DireccionEnvio);
  });
  console.log("-----------------");
}

console.log("\nUsando for in:");
for (let i = 0; i < 1; i++) {
  for (const index in miPedido) {
    const pedido = miPedido[index];
    console.log("ID de Pedido:", pedido.IdPedido, "CI:", pedido.CI, "ID de Repartidor:", pedido.IdRepartidor,
      "Fecha:", pedido.Fecha, "Total:", pedido.Total, "Entregado:", pedido.Entregado, "Dirección de Envío:", pedido.DireccionEnvio);
  }
  console.log("-----------------");
}

console.log("\nUsando for of:");
for (let i = 0; i < 1; i++) {
  for (const pedido of miPedido) {
    console.log("ID de Pedido:", pedido.IdPedido, "CI:", pedido.CI, "ID de Repartidor:", pedido.IdRepartidor,
      "Fecha:", pedido.Fecha, "Total:", pedido.Total, "Entregado:", pedido.Entregado, "Dirección de Envío:", pedido.DireccionEnvio);
  }
  console.log("-----------------");
}

  