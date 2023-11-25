export class UpdateRepartidorDto {
  private constructor(
      public readonly id: number,
      public readonly Nombre?: string,
      public readonly Telefono?: string,
      public readonly Correo?: string,
      public readonly Cedula?: string
  ) {}

  get values() {
      const returnObj: { [key: string]: any } = {};

      if (this.Nombre) returnObj.Nombre = this.Nombre;
      if (this.Telefono) returnObj.Telefono = this.Telefono;
      if (this.Correo) returnObj.Correo = this.Correo;
      if (this.Cedula) returnObj.Cedula = this.Cedula;

      return returnObj;
  }

  static create(props: { [key: string]: any }): [string?, UpdateRepartidorDto?] {
      const { id, Nombre, Telefono, Correo, Cedula } = props;

      if (!id || isNaN(Number(id))) {
          return ['id must be a valid number'];
      }

      if (!Nombre && !Telefono && !Correo && !Cedula) {
          return ['At least one property must be provided'];
      }

      return [undefined, new UpdateRepartidorDto(id, Nombre, Telefono, Correo, Cedula)];
  }
}
