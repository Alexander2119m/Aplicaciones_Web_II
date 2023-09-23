
const miPedido = [ 
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
  
  ];

  function buscarPedidoPorId(id, callback) {
    const pedidoEncontrado = miPedido.find((pedido) => pedido.IdPedido === id);
  
    if (pedidoEncontrado) {
      callback(null, pedidoEncontrado); 
    } else {
      callback("Pedido no encontrado", null); 
    }
  }
  

  const idBuscado = 3;
  
  buscarPedidoPorId(idBuscado, (error, pedido) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Pedido encontrado:");
      console.log(pedido);
    }
  });