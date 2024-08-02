import { usePokemonService } from "../../../services/pokemonServices";
import { PokemonBase } from "../../../typings/Pokemon";
import PokemonThumbnail from "../thumbnail";

interface PokemonListProps {
  pokemonList: PokemonBase[];
}

const PokemonList = ({ pokemonList }: PokemonListProps) => {
  const { isCaught } = usePokemonService();
  return (
    <div className="py-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemonList.map((p) => (
          <li key={`pokemon-thumnail-${p.id}`}>
            <PokemonThumbnail pokemon={p} caught={isCaught(p.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonList;
