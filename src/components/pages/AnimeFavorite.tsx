"use client";

import { Box, Grid } from "@mui/material";
import { useFavoriteAnimeStore } from "@/stores";
import { Breadcrumbs, CardAnime } from "../common";

export function AnimeFavorite() {
  const favoriteAnime = useFavoriteAnimeStore((state) => state.favoriteAnime);
  return (
    <Box paddingX={10}>
      <Breadcrumbs title="Favorite" />
      <Grid container spacing={3} justifyContent="center">
        {favoriteAnime.map((anime) => (
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
    </Box>
  );
}
