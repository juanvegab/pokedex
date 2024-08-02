import { PokemonBase, PokemonDetail } from "../../../typings/Pokemon";
import PokeballImage from "../../../assets/pokeball.png";
import PokeballImageGray from "../../../assets/pokeball-gray.png";
import { usePokemonService } from "../../../services/pokemonServices";

interface PokemonThumbnailProps {
  pokemon: PokemonBase;
  caught?: boolean;
}

const PokemonThumbnail = ({
  pokemon,
  caught = false,
}: PokemonThumbnailProps) => {
  const { getDetail } = usePokemonService();
  const loadClickedPokemon = () => getDetail(pokemon.name);
  const pokemonImage =
    pokemon.image ||
    (pokemon as PokemonDetail).sprites.other["official-artwork"].front_default;

  return (
    <div className="flex transition ease-in-out cursor-pointer bg-zinc-600 hover:bg-blue-950 rounded-lg overflow-hidden mb-2">
      <div className="w-24 p-2 bg-white" onClick={loadClickedPokemon}>
        <img src={pokemonImage} alt={pokemon.name} />
      </div>
      <div className="flex-1 flex text-white px-3 py-5 ">
        <div className="flex-1" onClick={loadClickedPokemon}>
          <h2 className="capitalize font-extrabold text-2xl">{pokemon.name}</h2>
          <p>Number #{pokemon.id}</p>
        </div>

        <div className="flex justify-center items-center">
          {caught ? (
            <img className="w-6" src={PokeballImage} alt="Pokeball" />
          ) : (
            <img className="w-6" src={PokeballImageGray} alt="Pokeball" />
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonThumbnail;
