import { IPokemon } from "@/utils/interfaces";

export interface IContext {
  pokemon: IPokemon;
  setPokemon: React.Dispatch<React.SetStateAction<IPokemon>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  handlePokemon: (name: string) => Promise<IPokemon>;
}

export interface IProvider {
  children: React.ReactNode;
}
