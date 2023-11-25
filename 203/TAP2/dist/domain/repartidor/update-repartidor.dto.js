"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRepartidorDto = void 0;
class UpdateRepartidorDto {
    constructor(Nombre, Telefono, Correo, Cedula) {
        this.Nombre = Nombre;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Cedula = Cedula;
    }
    static create(props) {
        const { Nombre, Telefono, Correo, Cedula } = props;
        const updateRepartidorDto = {
            values: undefined
        };
        if (Nombre !== undefined) {
            if (typeof Nombre !== 'string') {
                return ['Entrada no válida. El campo Nombre debe ser una cadena.', undefined];
            }
            updateRepartidorDto.Nombre = Nombre;
        }
        if (Telefono !== undefined) {
            if (typeof Telefono !== 'string') {
                return ['Entrada no válida. El campo Teléfono debe ser una cadena.', undefined];
            }
            updateRepartidorDto.Telefono = Telefono;
        }
        if (Correo !== undefined) {
            if (typeof Correo !== 'string') {
                return ['Entrada no válida. El campo Correo debe ser una cadena.', undefined];
            }
            updateRepartidorDto.Correo = Correo;
        }
        if (Cedula !== undefined) {
            if (typeof Cedula !== 'string') {
                return ['Entrada no válida. El campo Cédula debe ser una cadena.', undefined];
            }
            updateRepartidorDto.Cedula = Cedula;
        }
        if (Cedula !== undefined) {
            const cedulaRegex = /^[0-9]{10}$/; // Expresión regular para 10 dígitos numéricos
            if (typeof Cedula !== 'string' || !cedulaRegex.test(Cedula)) {
                return ['Entrada no válida. El campo Cédula debe contener exactamente 10 dígitos numéricos.', undefined];
            }
            updateRepartidorDto.Cedula = Cedula;
        }
        if (Correo !== undefined) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (typeof Correo !== 'string' || !emailRegex.test(Correo)) {
                return ['Entrada no válida. El campo Correo debe ser una dirección de correo electrónico válida.', undefined];
            }
            updateRepartidorDto.Correo = Correo;
        }
        return [undefined, updateRepartidorDto];
    }
}
exports.UpdateRepartidorDto = UpdateRepartidorDto;
