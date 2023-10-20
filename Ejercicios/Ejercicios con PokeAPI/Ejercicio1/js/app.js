import { Pokemon } from "./pokemon.js";

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

var nombre = document.getElementById('nombre').value.toLowerCase();
var idPoke = document.getElementById('idPokedex').value;

const btnEnv = document.getElementById('btnEnviar');
const btnMov = document.getElementById('btnMovimientos');

var pokemon

btnEnv.addEventListener('click', function (event) {
    obtenerInformacionPokemon(nombre)
})

// Función para realizar la llamada asíncrona
async function obtenerInformacionPokemon(nombrePokemon) {
    try {
        const response = await fetch(apiUrl + nombrePokemon);
        if (!response.ok) {
            throw new Error('No se pudo obtener la información del Pokémon ${nombrePokemon}`');
        }

        const data = await response.json();
        cargarPokemon(data)

        console.log('Información del Pokémon:', data);
    } catch (error) {
        console.error(error);
    }
}

function guardarPokemon(data) {
    pokemon = new Pokemon(data.id, data.name);
    nombre = pokemon.nombre;
    idPoke = pokemon.id;

    var poke = JSON.stringify(pokemon);
    localStorage.setItem('pokemon', poke);
}

function cargarPokemon(pokemon) {
    document.getElementById('pokeNombre').value = pokemon.nombre
    idPoke = pokemon.id
}

function cargarMovimientos(data, pokemon) {

}