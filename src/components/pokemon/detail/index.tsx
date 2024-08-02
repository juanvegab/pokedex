import { usePokemonService } from "../../../services/pokemonServices";
import { PokemonDetail as PKMDetail } from "../../../typings/Pokemon";

interface PokemonDetailProps {
  pokemon: PKMDetail | undefined | null;
}

const PokemonDetail = ({ pokemon }: PokemonDetailProps) => {
  const { catchPokemon, release, isCaught } = usePokemonService();

  if (!pokemon) return null;

  const caught = isCaught(pokemon.id);
  const togglePokemon = () => {
    if (caught) {
      release(pokemon?.name || "");
    } else {
      catchPokemon(pokemon as PKMDetail);
    }
  };

  return (
    <div>
      <div className="w-full">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="h-56 w-56 mx-auto"
        />
      </div>
      <h1 className="text-2xl font-extrabold text-neutral-500 capitalize">
        {pokemon.name}
      </h1>
      <div className="mt-4">
        <p className="text-xl mb-2">Type(s):</p>
        <div className="flex flex-wrap overflow-scroll">
          {pokemon.types.slice(0, 5).map((t) => (
            <span
              key={`type-${t.type.name}`}
              className="rounded px-2 py-1 bg-gray-100 capitalize mr-2 mb-2"
            >
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xl mb-2">Abilities:</p>
        <div className="flex flex-wrap overflow-scroll">
          {pokemon.abilities.slice(0, 5).map((t) => (
            <span
              key={`type-${t.ability.name}`}
              className="rounded px-2 py-1 bg-blue-100 capitalize mr-2 mb-2"
            >
              {t.ability.name}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <p className="text-xl mb-2">Moves:</p>
        <div className="flex flex-wrap overflow-scroll">
          {pokemon.moves.slice(0, 5).map((m) => (
            <span
              key={`type-${m.move.name}`}
              className="rounded px-2 py-1 bg-green-100 capitalize mr-2 mb-2"
            >
              {m.move.name}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        {caught ? (
          <button
            className="rounded-lg w-5/6 bg-rose-500 text-white px-4 py-2"
            onClick={togglePokemon}
          >
            Release {pokemon.name}
          </button>
        ) : (
          <button
            className="rounded-lg w-5/6 bg-blue-500 text-white px-4 py-2"
            onClick={togglePokemon}
          >
            Catch {pokemon.name}
          </button>
        )}
      </div>
    </div>
  );
};

export default PokemonDetail;
