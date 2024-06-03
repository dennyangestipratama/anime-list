export type SearchHistoryStoreType = {
  searchHistory: string[];
  addToSearchHistory: (query: string) => void;
  deleteSearchHistory: (query: string) => void;
  clearSearchHistory: () => void;
};

export type SearchHistoryType = {
  handleClose: () => void;
};
