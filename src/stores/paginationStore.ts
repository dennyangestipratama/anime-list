import { create } from "zustand";
import { PaginationStoreType } from "@/types";

export const usePaginationStore = create<PaginationStoreType>((set) => ({
  page: 1,
  searchPage: 1,
  setPage: (page) => set({ page }),
  setSearchPage: (page) => set({ searchPage: page }),
}));

export type PaginationType = {
  pageCount: number;
  page: number;
  inputPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.ChangeEvent<unknown>) => void;
};
