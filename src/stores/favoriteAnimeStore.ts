import { create } from "zustand";
import { AnimeType } from "@/types";

export type FavoriteAnimeStore = {
  favoriteAnime: AnimeType[];
  addToFavorites: (anime: AnimeType) => void;
  removeFromFavorites: (id: number) => void;
};

export const useFavoriteAnimeStore = create<FavoriteAnimeStore>((set) => ({
  favoriteAnime: [],
  addToFavorites: (anime) =>
    set((state) => ({
      favoriteAnime: [...state.favoriteAnime, anime],
    })),
  removeFromFavorites: (id) =>
    set((state) => ({
      favoriteAnime: state.favoriteAnime.filter((anime) => anime.mal_id !== id),
    })),
}));
