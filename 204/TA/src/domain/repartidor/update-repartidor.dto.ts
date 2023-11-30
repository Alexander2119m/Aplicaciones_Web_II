export class UpdateRepartidorDto {
  values: any;

  constructor(
    public id_repartidor?: number,
    public Nombre?: string,
    public Telefono?: string,
    public Correo?: string,
    public Cedula?: string
  ) {
    this.values = {}; // Inicializa el objeto values en el constructor
  }

  static create(props: { [key: string]: any }): [string?, UpdateRepartidorDto?] {
    const { id_repartidor, Nombre, Telefono, Correo, Cedula } = props;
    const updateRepartidorDto = new UpdateRepartidorDto();

    if (id_repartidor !== undefined) {
      if (typeof id_repartidor !== 'number') {
        return ['Entrada no válida. El campo id_repartidor debe ser un número.', undefined];
      }
      updateRepartidorDto.values.id_repartidor = id_repartidor;
    }

    if (Nombre !== undefined) {
      if (typeof Nombre !== 'string') {
        return ['Entrada no válida. El campo Nombre debe ser una cadena.', undefined];
      }
      updateRepartidorDto.values.Nombre = Nombre;
    }

    if (Telefono !== undefined) {
      if (typeof Telefono !== 'string') {
        return ['Entrada no válida. El campo Teléfono debe ser una cadena.', undefined];
      }
      updateRepartidorDto.values.Telefono = Telefono;
    }

    if (Correo !== undefined) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (typeof Correo !== 'string' || !emailRegex.test(Correo)) {
        return ['Entrada no válida. El campo Correo debe ser una dirección de correo electrónico válida.', undefined];
      }
      updateRepartidorDto.values.Correo = Correo;
    }

    if (Cedula !== undefined) {
      const cedulaRegex = /^[0-9]{10}$/;
      if (typeof Cedula !== 'string' || !cedulaRegex.test(Cedula)) {
        return ['Entrada no válida. El campo Cédula debe contener exactamente 10 dígitos numéricos.', undefined];
      }
      updateRepartidorDto.values.Cedula = Cedula;
    }

    return [undefined, updateRepartidorDto];
  }
}
