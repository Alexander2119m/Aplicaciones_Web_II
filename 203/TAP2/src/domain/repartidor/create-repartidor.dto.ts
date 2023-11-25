export class CreateRepartidorDto {
    constructor(
      public readonly Nombre: string,
      public readonly Telefono: string,
      public readonly Correo: string,
      public readonly Cedula: string
    ) {}
  
    static create(props: { [key: string]: any }): [string | undefined, CreateRepartidorDto | undefined] {
      const { Nombre, Telefono, Correo, Cedula } = props;
  
      if (Nombre === undefined || Telefono === undefined || Correo === undefined || Cedula === undefined) {
        return ['Entrada no válida. Todos los campos son obligatorios.', undefined];
      }
  
      if (
        typeof Nombre !== 'string' ||
        typeof Telefono !== 'string' ||
        typeof Correo !== 'string' ||
        typeof Cedula !== 'string'
      ) {
        return ['Entrada no válida. Verifica los tipos de datos de los campos.', undefined];
      }
  
      return [undefined, new CreateRepartidorDto(Nombre, Telefono, Correo, Cedula)];
    }
  }
  