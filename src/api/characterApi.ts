import { characters } from "../data/dummy";
import { Character } from "../types/characters";

export const getAll = async (): Promise<Character[]> => {
  return characters;
};
