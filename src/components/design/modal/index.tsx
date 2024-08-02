import { useContext } from "react";
import PokemonDetail from "../../pokemon/detail";
import { PokedexStateContext } from "../../../services/stateProvider";

const Modal = () => {
  const {
    updateStateItem,
    state: { selectedPokemon },
  } = useContext(PokedexStateContext);
  const closeModal = () => {
    updateStateItem({ selectedPokemon: undefined });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <div className="bg-white w-[370px] rounded-lg p-8 relative">
        <button
          className="absolute top-3 right-3 text-2xl text-black"
          onClick={closeModal}
        >
          x
        </button>
        <PokemonDetail pokemon={selectedPokemon} />
      </div>
    </div>
  );
};

export default Modal;
