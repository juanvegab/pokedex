import { PokemonBase, PokemonDetail } from "./Pokemon";

export type PokedexStoredState = {
  caughtPokemon?: Array<PokemonDetail>;
};

export type PokedexVolatileState = {
  pokemonList?: Array<PokemonBase>;
  selectedPokemon?: PokemonDetail | undefined | null;
};

export type PokedexStateType = PokedexStoredState & PokedexVolatileState;

export type PokedexStateContextType = {
  state: PokedexStateType;
  updateState: (s: PokedexStateType) => void;
  updateStateItem: (s: PokedexStateType) => void;
  updateStoredState: (s: PokedexStoredState) => void;
};
