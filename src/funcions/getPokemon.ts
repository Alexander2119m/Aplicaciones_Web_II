//const {httpClient}= require("./pluguins")
import { IPokemon } from "../interfaces/IPedido";
import {httpClient} from "../pluguins"

//https://pokeapi.co/api/v2/pokemon/100

export const getPokemon = async (idPokemon:string):Promise<IPokemon>=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
    const pokemon = await httpClient.get<IPokemon>(url)
    return pokemon;
}

//module.exports = {getPokemon}