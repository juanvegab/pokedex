import { useEffect, useState } from "react";
import { usePokemonService } from "../../services/pokemonServices";
import PokemonList from "../pokemon/list";
import { PokemonBase } from "../../typings/Pokemon";

const Pokedex = () => {
  const [allList, setAllList] = useState<PokemonBase[]>([]);
  const { getAll } = usePokemonService();

  useEffect(() => {
    getAll().then((all) => setAllList(all));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <PokemonList pokemonList={allList} />
    </div>
  );
};

export default Pokedex;
