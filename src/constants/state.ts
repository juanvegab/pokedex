import {
  PokedexStateContextType,
  PokedexStateType,
  PokedexStoredState,
  PokedexVolatileState,
} from "../typings/state";

export const STORED_STATE_NAME = "pokedex-cookies";
export const INITIAL_STATE: PokedexStateContextType = {
  state: {
    caughtPokemon: [],
    pokemonList: [],
    selectedPokemon: null,
  },
  updateState: (s: PokedexStateType) => null,
  updateStateItem: (s: PokedexVolatileState) => null,
  updateStoredState: (s: PokedexStoredState) => null,
};
