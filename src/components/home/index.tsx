import Caught from "../caught";
import TabMenu from "../design/tabMenu";
import Pokedex from "../pokedex";
import PokedexLogo from "../../pokedex-logo.png";
import Modal from "../design/modal";
import { useContext } from "react";
import { PokedexStateContext } from "../../services/stateProvider";

const Home = () => {
  const {
    state: { selectedPokemon },
  } = useContext(PokedexStateContext);
  const tabs = [
    {
      id: "pokedex",
      label: "All Pokemon",
      children: <Pokedex />,
    },
    {
      id: "caught",
      label: "Caught Pokemon",
      children: <Caught />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-3">
      <img src={PokedexLogo} alt="Pokemon Logo" className="mx-auto my-20" />
      <TabMenu tabs={tabs} />
      {selectedPokemon && <Modal />}
    </div>
  );
};

export default Home;
