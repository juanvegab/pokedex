import { useContext } from "react";
import { PokemonBase, PokemonDetail } from "../typings/Pokemon";
import { useAPI } from "../utils/api-connection";
import { PokedexStateContext } from "./stateProvider";

const usePokemonService = () => {
  const baseImage =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";
  const { getAllPokemon, getDetailedPokemon } = useAPI();
  const {
    updateStateItem,
    updateStoredState,
    state: { caughtPokemon = [] },
  } = useContext(PokedexStateContext);

  const getAll = () => {
    return getAllPokemon().then((all) => {
      return all.map((p) => {
        const pokemonId = p.url.split("pokemon/")[1].split("/")[0];
        return {
          id: pokemonId,
          url: p.url,
          name: p.name,
          image: `${baseImage}/${pokemonId}.png`,
        } as PokemonBase;
      });
    });
  };

  const getDetail = (name: string) => {
    return getDetailedPokemon(name).then((p) => {
      updateStateItem({ selectedPokemon: p });
    });
  };

  const catchPokemon = (pokemon: PokemonDetail) => {
    updateStoredState({ caughtPokemon: [...caughtPokemon, pokemon] });
  };

  const release = (name: string) => {
    updateStoredState({
      caughtPokemon: caughtPokemon.filter((p) => p.name !== name),
    });
  };

  const isCaught = (id: string) => {
    return caughtPokemon.some((p) => p.id === id);
  };

  return {
    getAll,
    isCaught,
    getDetail,
    catchPokemon,
    release,
  };
};

export { usePokemonService };
