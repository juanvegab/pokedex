import { useContext } from "react";
import PokemonList from "../pokemon/list";
import { PokedexStateContext } from "../../services/stateProvider";

const Caught = () => {
  const {
    state: { caughtPokemon = [] },
  } = useContext(PokedexStateContext);
  return (
    <div>
      <PokemonList pokemonList={caughtPokemon} />
    </div>
  );
};

export default Caught;
