import "./style.css";

(async () => {
  const response = await fetch("http://localhost:3012/api/repartidor");
  const data = await response.json();

  let divTable = `<table>`;
  divTable += `<tr><th>Id</th><th>Nombre</th><th>Telefono</th><th>Correo</th><th>Cedula</th><th>Acciones</th></tr>`;
  data.forEach((repartidor: Repartidor) => {
    divTable += `<tr>
      <td>${repartidor.id_repartidor}</td>
      <td>${repartidor.Nombre}</td>
      <td>${repartidor.Telefono}</td>
      <td>${repartidor.Correo}</td>
      <td>${repartidor.Cedula}</td>
      <td>
        <button class="btn btn-update">Actualizar</button>
        <button class="btn btn-delete">Eliminar</button>
      </td>
    </tr>`;
  });
  divTable += `</table>`;

  document.querySelector<HTMLDivElement>("#app")!.innerHTML = divTable;

  const divButton = `<button class="btn btn-primary">Agregar</button>`;
  document.querySelector<HTMLDivElement>("#app")!.innerHTML += divButton;

  const btnAgregar = document.querySelector<HTMLButtonElement>(".btn-primary");
  btnAgregar?.addEventListener("click", () => {
    const divForm = `<form>
      <div class="mb-3">
        <label for="Nombre" class="form-label">Nombre</label>
        <input type="text" class="form-control" id="Nombre" aria-describedby="Nombre">
      </div>
      <div class="mb-3">
        <label for="Telefono" class="form-label">Telefono</label>
        <input type="text" class="form-control" id="Telefono">
      </div>
      <div class="mb-3">
        <label for="Correo" class="form-label">Correo</label>
        <input type="text" class="form-control" id="Correo">
      </div>
      <div class="mb-3">
        <label for="Cedula" class="form-label">Cedula</label>
        <input type="text" class="form-control" id="Cedula">
      </div>
     
      <button type='submit'  class="btn btn-save">Guardar</button>
      <button type='button'  class="btn btn-cancel">Cancelar</button>
    </form>`;
    document.querySelector<HTMLDivElement>("#app")!.innerHTML = divForm;

    const btnCancel = document.querySelector<HTMLButtonElement>(".btn-cancel");
    btnCancel?.addEventListener("click", () => {
      location.reload();
    });

    const btnSave = document.querySelector<HTMLButtonElement>(".btn-save");
    btnSave?.addEventListener("click", async (e) => {
      e.preventDefault();
      const Nombre = document.querySelector<HTMLInputElement>("#Nombre")!.value;
      const Telefono =
        document.querySelector<HTMLInputElement>("#Telefono")!.value;
      const Correo = document.querySelector<HTMLInputElement>("#Correo")!.value;
      const Cedula = document.querySelector<HTMLInputElement>("#Cedula")!.value;

      const response = await fetch("http://localhost:3012/api/repartidor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Nombre, Telefono, Correo, Cedula }),
      });

      const data = await response.json();
      console.log(data);

      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>(".btn-delete").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id =
        btn.parentElement?.parentElement?.firstElementChild?.textContent;
      console.log(id);
      await fetch(`http://localhost:3012/api/repartidor/${id}`, {
        method: "DELETE",
      });
      location.reload();
    });
  });

  document.querySelectorAll<HTMLButtonElement>(".btn-update").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id =
        btn.parentElement?.parentElement?.firstElementChild?.textContent;
      const response = await fetch(
        `http://localhost:3012/api/repartidor/8`
      );
      const data = await response.json();
      console.log(id);
      console.log(data);

      const btnCancel = `<button class="btn btn-cancel">Cancelar</button>`;
      const divForm = `<form>
        <div class="mb-3">
          <label for="Nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="Nombre" aria-describedby="Nombre" value="${data.Nombre}">
        </div>
        <div class="mb-3">
          <label for="Telefono" class="form-label">Telefono</label>
          <input type="text" class="form-control" id="Telefono" value="${data.Telefono}">
        </div>
        <div class="mb-3">
          <label for="Correo" class="form-label">Correo</label>
          <input type="text" class="form-control" id="Correo" value="${data.Correo}">
        </div>
        <div class="mb-3">
          <label for="Cedula" class="form-label">Cedula</label>
          <input type="text" class="form-control" id="Cedula" value="${data.Cedula}">
        </div>
   
        <button type='submit'  class="btn btn-save">Guardar</button>
        ${btnCancel}
      </form>`;
      document.querySelector<HTMLDivElement>("#app")!.innerHTML = divForm;

      const btnSave = document.querySelector<HTMLButtonElement>(".btn-save");
      btnSave?.addEventListener("click", async (e) => {
        e.preventDefault();
        const Nombre =
          document.querySelector<HTMLInputElement>("#Nombre")!.value;
        const Telefono =
          document.querySelector<HTMLInputElement>("#Telefono")!.value;
        const Correo =
          document.querySelector<HTMLInputElement>("#Correo")!.value;
        const Cedula =
          document.querySelector<HTMLInputElement>("#Cedula")!.value;

        const response = await fetch(
          `http://localhost:3012/api/repartidor/${id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ Nombre, Telefono, Correo, Cedula }),
          }
        );

        const updatedData = await response.json();
        console.log(updatedData);
        location.reload();

      });
    });
  });
})();
