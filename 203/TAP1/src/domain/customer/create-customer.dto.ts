import { CreateRepartidorDto } from "../repartidor/create-repartidor.dto";

export class CreateCustomerDto {
  private constructor(
      public readonly Nombre: string,
      public readonly Telefono: string,
      public readonly Correo: string,
      public readonly Cedula: string,
      public readonly repartidor?: CreateRepartidorDto[],
  ) {}

  static create(props: { [key: string]: any }): [string? , CreateCustomerDto?] {
      const { Nombre, Telefono, Correo, Cedula, Repartidor } = props;

      if (!Nombre) return ['Nombre property is required', undefined];
      if (!Telefono) return ['Telefono property is required', undefined];
      if (!Correo) return ['Correo property is required', undefined];
      if (!Cedula) return ['Cedula property is required', undefined];

      return [undefined, new CreateCustomerDto(Nombre, Telefono, Correo, Cedula, Repartidor)];
  }
}
