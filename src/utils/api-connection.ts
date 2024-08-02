import { ENDPOINTS } from "../constants/endpoints";
import { PokemonDetail, PokemonResponse } from "../typings/Pokemon";

export const useAPI = () => {
  // const { createErrorMsg } = useInfoToastService();

  const BASE_OPTIONS: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  const GET_OPTIONS = {
    ...BASE_OPTIONS,
    method: "GET",
  };

  interface Response<T> {
    meta: unknown;
    results: T;
  }

  const api = <T>(url: string, options: RequestInit): Promise<T> => {
    return fetch(url, options).then((r) => {
      if (r.status === 204 || r.status === 202) return { success: true };
      if (r.ok)
        return r.json().catch(() => {
          throw r;
        });
      // r.text().then((t) => createErrorMsg({ title: "Error:", message: t }));
      throw r;
    });
  };

  const getAllPokemon = () => {
    return api<Response<Array<PokemonResponse>>>(
      ENDPOINTS.POKEMON + "?limit=2000",
      {
        ...GET_OPTIONS,
      }
    ).then((r) => r.results);
  };

  const getDetailedPokemon = (name: string) => {
    return api<PokemonDetail>(ENDPOINTS.POKEMON + name, {
      ...GET_OPTIONS,
    }).then((r) => r);
  };

  return {
    getAllPokemon,
    getDetailedPokemon,
  };
};
