
import { PokemonGrid } from "@/pokemons"
import { Metadata } from "next";

export const metadata:Metadata = {
    title: 'Favoritos',
    description: 'Pokemons favoritos',
   };




export default async function PokemonsPage() {

 

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-500">Global state</small></span>
      <PokemonGrid pokemons={[]}/>
    </div>
  );
}