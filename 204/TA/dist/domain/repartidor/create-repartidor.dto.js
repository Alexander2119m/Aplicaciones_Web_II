"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRepartidorDto = void 0;
class CreateRepartidorDto {
    constructor(Nombre, Telefono, Correo, Cedula) {
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Cedula = Cedula;
    }
    static create(props) {
        const { Nombre, Telefono, Correo, Cedula } = props;
        if (Nombre === undefined || Telefono === undefined || Correo === undefined || Cedula === undefined) {
            return ['Entrada no válida. Todos los campos son obligatorios.', undefined];
        }
        if (typeof Nombre !== 'string' ||
            typeof Telefono !== 'string' ||
            typeof Correo !== 'string' ||
            typeof Cedula !== 'string') {
            return ['Entrada no válida. Verifica los tipos de datos de los campos.', undefined];
        }
        return [undefined, new CreateRepartidorDto(Nombre, Telefono, Correo, Cedula)];
    }
}
exports.CreateRepartidorDto = CreateRepartidorDto;
