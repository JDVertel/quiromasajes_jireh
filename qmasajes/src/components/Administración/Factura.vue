<template>
  <div id="header">
    <div id="logo">
      <img src="https://i.ibb.co/NLqWkps/QlOGO.png" alt="Logo" />
    </div>
    <div id="datosEmpresa">
      <p>Nombre de la Empresa</p>
      <p>Dirección de la Empresa</p>
      <p>Otros datos de la Empresa</p>
    </div>
    <div id="numeroFactura">
      <strong>ID:</strong>
      <p>12345</p>
    </div>
  </div>

  <div id="body">
    <div id="datosCliente">
      <p>Nombre del Cliente: Juan Pérez</p>
      <p>Documento: 123456789</p>
      <p>Teléfono: 123-4567890</p>
      <p>Dirección: Calle 123, Ciudad</p>
      <p>Ciudad: Ciudad</p>
      <p>Departamento: Departamento</p>
    </div>

    <p>Fecha de la Factura: 06/12/2023</p>

    <table id="productos">
      <thead>
        <tr>
          <th>Código de Producto</th>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Valor Unitario</th>
          <th>Valor Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>001</td>
          <td>Producto 1</td>
          <td>2</td>
          <td>$10.00</td>
          <td>$20.00</td>
        </tr>
      </tbody>
    </table>

    <div id="total">
      <p>Total: $100.00</p>
      <p>Valor en Letras: Cien dólares</p>
      <p>Forma de Pago: Tarjeta de Crédito</p>
      <p>Valor IVA (19%): $19.00</p>
      <p>Total a Pagar: $119.00</p>
    </div>

    <div id="botonImprimir">
      <button onclick="window.print()">Imprimir</button>
    </div>
  </div>
</template>

<style scoped>
/*  */
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ff00ff;
  color: #fff;
}

#logo img {
  width: 150px;
  padding-left: 10px;
  margin-left: -50px;
  margin-right: -50px;
}

#datosEmpresa {
  text-align: center;
}

#numeroFactura {
  font-weight: bold;
}

#body {
  padding: 20px;
}

#datosCliente {
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #0000001f;
  border-radius: 5px;
  margin-bottom: 20px;
}

#productos {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  margin-bottom: 20px;
}

#productos th,
#productos td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

#productos th {
  background: #ff00ff;
  color: #fff;
}

#total {
  text-align: right;
  border-style: solid;
  border-width: 1px;
  border-color: #0000001f;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
}

#botonImprimir {
  text-align: center;
}

button {
  background-color: #ff00ff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #48dbf8;
}
/*  */
</style>
