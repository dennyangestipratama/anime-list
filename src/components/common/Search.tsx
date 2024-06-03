"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";
import { SearchHistory } from "./SearchHistory";
import { useSearchHistoryStore } from "@/stores";

export function Search() {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const searchHistory = useSearchHistoryStore((state) => state.searchHistory);
  const addToSearchHistory = useSearchHistoryStore(
    (state) => state.addToSearchHistory
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToSearchHistory(query);
    router.push(`/browse/${query}`);
  };

  const handleReset = () => {
    setShowHistory(false);
    setQuery("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      display="flex"
      justifyContent="center"
      height={40}
      alignItems="center"
      position="relative"
    >
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setShowHistory(true)}
        style={{
          width: "100%",
          height: 40,
          borderRadius: 100,
          backgroundColor: "#F4F6F8",
          border: "none",
          outline: showHistory ? "1px solid #CB1C4F" : "none",
          color: "#000",
          padding: "0 16px",
        }}
        placeholder="Search for anime here"
      />
      {searchHistory.length > 0 && showHistory && (
        <SearchHistory handleClose={handleReset} />
      )}
    </Box>
  );
}
