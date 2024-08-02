import { FC, ReactNode, createContext, useState } from "react";
import {
  PokedexStateType,
  PokedexStateContextType,
  PokedexStoredState,
} from "../typings/state";
import { INITIAL_STATE, STORED_STATE_NAME } from "../constants/state";

const getStoredState = (): PokedexStateType => {
  const storedState = localStorage.getItem(STORED_STATE_NAME);
  if (!storedState) return INITIAL_STATE.state;
  return JSON.parse(storedState);
};

const setStateToStore = (newState: PokedexStoredState) => {
  localStorage.setItem(STORED_STATE_NAME, JSON.stringify(newState));
};

export const PokedexStateContext =
  createContext<PokedexStateContextType>(INITIAL_STATE);

interface PokedexStateProviderProps {
  children: ReactNode | Array<ReactNode>;
}

export const PokedexStateProvider: FC<PokedexStateProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<PokedexStateType>({
    ...INITIAL_STATE.state,
    ...getStoredState(),
  });
  const updateState = (s: PokedexStateType) => setState(s);
  const updateStateItem = (vs: PokedexStateType) => {
    setState((prev) => ({ ...prev, ...vs }));
  };
  const updateStoredState = (ss: PokedexStoredState) => {
    setState((prev) => {
      setStateToStore({ ...getStoredState(), ...ss });
      return { ...prev, ...ss };
    });
  };

  return (
    <PokedexStateContext.Provider
      value={{
        state,
        updateState,
        updateStateItem,
        updateStoredState,
      }}
    >
      {children}
    </PokedexStateContext.Provider>
  );
};
