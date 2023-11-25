export class CreateRepartidorDto {
  private constructor(
      public readonly Nombre: string,
      public readonly Telefono: string,
      public readonly Correo: string,
      public readonly Cedula: string
  ) {}

  static create(props: { [key: string]: any }): [string?, CreateRepartidorDto?] {
      const { Nombre, Telefono, Correo, Cedula } = props;
      if (!Nombre) return ['Nombre property is required', undefined];
      if (!Telefono) return ['Telefono property is required', undefined];
      if (!Correo) return ['Correo property is required', undefined];
      if (!Cedula) return ['Cedula property is required', undefined];
      return [undefined, new CreateRepartidorDto(Nombre, Telefono, Correo, Cedula)];
  }
}
