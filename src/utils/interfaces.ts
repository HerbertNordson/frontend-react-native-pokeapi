export interface IPokemon {
  name: string;
  image: string;
  abilities: Array<IAbility>;
}

export interface IAbility {
  name: string;
  url: string;
}

export interface IAbilities {
  ability: {
    name: string;
    url: string;
  };
}
