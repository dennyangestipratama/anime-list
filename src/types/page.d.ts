import { ReactNode } from "react";

export type PageContainerType = {
  children: ReactNode;
};

export type PaginationStoreType = {
  page: number;
  searchPage: number;
  setPage: (page: number) => void;
  setSearchPage: (page: number) => void;
};
