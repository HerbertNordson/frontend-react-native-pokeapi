import { createContext, useContext, useMemo, useState } from "react";
import { IContext, IProvider } from "./interface";
import { api } from "@/services/api";
import { IAbilities, IAbility, IPokemon } from "@/utils/interfaces";

const PokeStoreContext = createContext<IContext>({} as IContext);

export const PokeStoreProvider: React.FC<IProvider> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<IPokemon>({} as IPokemon);
  const [error, setError] = useState<string | null>(null);

  function handleAbilities(abl: Array<IAbilities>) {
    return abl.map((el: IAbilities) => el.ability);
  }

  async function handlePokemon(name: string) {
    try {
      setLoading(true);
      const res = await api.get(`pokemon/${name}`);

      if (res.status === 200) {
        const data = res.data;
        const poke: IPokemon = {
          name: data.name,
          image: data.sprites.front_default,
          abilities: handleAbilities(data.abilities),
        };

        setPokemon(poke);
        setError(null);
        setLoading(false);
        return data;
      }
    } catch (error) {
      setLoading(false);
      setError("Pokemon não encontrado!");
      return error;
    }
  }

  const value = useMemo(
    () => ({
      pokemon,
      setPokemon,
      loading,
      setLoading,
      error,
      setError,
      handlePokemon,
    }),
    [pokemon, setPokemon, loading, setLoading, error, setError, handlePokemon]
  );

  return (
    <PokeStoreContext.Provider value={value}>
      {children}
    </PokeStoreContext.Provider>
  );
};

export default PokeStoreContext;

export const usePokeStoreContext = () => useContext(PokeStoreContext);
