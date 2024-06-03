"use client";

import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AnimeType } from "@/types";
import { usePaginationStore } from "@/stores";
import { fetchAnimeList } from "@/services/animeService";
import { CardAnime, Loader, Pagination } from "../common";

export function AnimeBrowse() {
  const params = useParams();
  const seachTerm = params.searchTerm;

  const [animeList, setAnimeList] = useState<AnimeType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageCount, setPageCount] = useState<number>(1);
  const [inputPage, setInputPage] = useState<number>(1);

  const page = usePaginationStore((state) => state.searchPage);
  const setPage = usePaginationStore((state) => state.setSearchPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchAnimeList({ page, q: String(seachTerm) });
        if (data) {
          setAnimeList([]);
          setAnimeList(data.data || []);
          setPageCount(data.pagination.last_visible_page);
        }
      } catch (error) {
        console.error("Error fetching anime list:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, seachTerm]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    setInputPage(value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Number(event.target.value));
    setInputPage(value);
  };

  const handleInputSubmit = (event: React.ChangeEvent<unknown>) => {
    event.preventDefault();
    if (inputPage > 0 && inputPage <= pageCount) {
      setPage(inputPage);
    }
  };

  if (loading) {
    return <Loader count={5} />;
  }

  return (
    <Box marginTop={12}>
      <Box paddingX={10}>
        <Grid container spacing={3} justifyContent="center">
          {animeList.map((anime) => (
            <Grid item key={anime.mal_id}>
              <CardAnime
                genres={anime.genres}
                id={anime.mal_id}
                score={anime.score}
                src={anime.images.webp.image_url}
                title={anime.title}
                year={anime.year}
              />
            </Grid>
          ))}
        </Grid>
        <Pagination
          page={page}
          pageCount={pageCount}
          inputPage={inputPage}
          handleInputChange={handleInputChange}
          handlePageChange={handlePageChange}
          handleSubmit={handleInputSubmit}
        />
      </Box>
    </Box>
  );
}
