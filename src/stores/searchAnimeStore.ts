import { create } from "zustand";
import { SearchHistoryStoreType } from "@/types";

export const useSearchHistoryStore = create<SearchHistoryStoreType>((set) => ({
  searchHistory: [],
  addToSearchHistory: (query) =>
    set((state) => ({
      searchHistory: [
        query,
        ...state.searchHistory.filter((item) => item !== query),
      ].slice(0, 5), // Limit to 5 items
    })),
  deleteSearchHistory: (query) =>
    set((state) => ({
      searchHistory: state.searchHistory.filter((item) => item !== query),
    })),
  clearSearchHistory: () => set({ searchHistory: [] }),
}));
