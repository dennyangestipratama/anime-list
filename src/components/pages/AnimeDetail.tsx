"use client";

import { useEffect, useState } from "react";
import { Subject } from "@mui/icons-material";
import { useParams, useRouter } from "next/navigation";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { useFavoriteAnimeStore } from "@/stores";
import { AnimeEntryType, AnimeGenreType, AnimeImageType } from "@/types";
import {
  fetchDetailAnime,
  fetchRecommendationsAnime,
} from "@/services/animeService";
import {
  Breadcrumbs,
  ButtonBack,
  ButtonFavorite,
  ButtonTrailer,
  CardInfo,
  DetailLoader,
  ImageCover,
  ModalTrailer,
  TextIcon,
} from "../common";
import { AnimeRecommendation } from "./AnimeRecommendation";
import useBreakpoint from "@/hooks/useBreakpoints";

export type AnimeDetailType = {
  title: string;
  synopsis: string;
  genres: AnimeGenreType[];
  images: AnimeImageType;
  mal_id: number;
  status: string;
  rank: number;
  score: number;
  source: string;
  rating: string;
  trailer: { url: string };
  year: number;
};

export function AnimeDetail() {
  const router = useRouter();
  const params = useParams();
  const animeId = params.id;

  const isSmallScreen = useBreakpoint("sm");

  const [anime, setAnime] = useState<AnimeDetailType | null>(null);
  const [animeRecommendations, setAnimeRecommendations] = useState<
    AnimeEntryType[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState<boolean>(false);
  const favoriteAnimeStore = useFavoriteAnimeStore(
    (state) => state.favoriteAnime
  );

  useEffect(() => {
    if (animeId) {
      const fetchData = async () => {
        try {
          setLoading(true);
          const data = await fetchDetailAnime(Number(animeId));
          if (data) {
            setAnime(data.data);
          }
        } catch (error) {
          console.error("Error fetching anime details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [animeId]);

  useEffect(() => {
    if (animeId) {
      const fetchRecommendations = async () => {
        try {
          setLoading(true);
          const data = await fetchRecommendationsAnime(Number(animeId));
          if (data) {
            setAnimeRecommendations([]);
            setAnimeRecommendations(data.data || []);
          }
        } catch (error) {
          console.error("Error fetching anime recommendations:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchRecommendations();
    }
  }, [animeId]);

  const addToFavorites = () => {
    if (anime) {
      useFavoriteAnimeStore.setState((state) => ({
        favoriteAnime: [...state.favoriteAnime, anime],
      }));
    }
  };

  const removeFromFavorites = (id: number) => {
    useFavoriteAnimeStore.setState((state) => ({
      favoriteAnime: state.favoriteAnime.filter((anime) => anime.mal_id !== id),
    }));
  };

  const handleBack = () => {
    router.back();
  };

  if (loading) {
    return <DetailLoader />;
  }

  if (!anime) {
    return <div>Anime not found</div>;
  }

  const isFavorite = favoriteAnimeStore.some(
    (favAnime) => favAnime.mal_id === anime.mal_id
  );

  return (
    <Box>
      <Box paddingX={isSmallScreen ? 2 : 10} display="flex" alignItems="center">
        <ButtonBack handleClick={handleBack} />
        <Breadcrumbs title={anime.title} />
      </Box>
      <Divider />
      <Box
        paddingX={isSmallScreen ? 2 : 10}
        marginTop={2}
        display="flex"
        flexDirection={isSmallScreen ? "column" : "row"}
      >
        <ImageCover title={anime.title} src={anime.images.webp.image_url} />
        <Box
          marginTop={isSmallScreen ? 2 : 0}
          marginLeft={isSmallScreen ? 0 : 2}
          width="100%"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box maxWidth={700}>
              <Typography
                color="rgb(33, 43, 54)"
                fontWeight="800"
                fontSize={isSmallScreen ? "18px" : "28px"}
              >
                {anime.title}
              </Typography>
            </Box>
            <ButtonFavorite
              isFavorite={isFavorite}
              handleClick={
                isFavorite
                  ? () => removeFromFavorites(anime.mal_id)
                  : addToFavorites
              }
            />
          </Box>
          <Stack direction="row" marginY="4px" spacing={2}>
            <CardInfo title="Source" data={anime.source} />
            <CardInfo title="Year" data={anime.year ?? "Unknown"} />
            <CardInfo title="Score" data={anime.score ?? "-"} />
          </Stack>
          <Box marginTop="8px">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <TextIcon title="Synopsis" Icon={Subject} />
              <ButtonTrailer
                url={anime.trailer.url}
                handleClick={() => setOpen(true)}
              />
            </Box>
            <Typography
              marginY="8px"
              color="rgb(33, 43, 54)"
              fontSize={isSmallScreen ? "12px" : "14px"}
              fontWeight="400"
              textAlign="justify"
            >
              {anime.synopsis ?? "No synopsis found"}
            </Typography>
          </Box>
          <ModalTrailer
            open={open}
            handleClose={() => setOpen(false)}
            trailerUrl={anime.trailer.url}
          />
        </Box>
      </Box>
      {animeRecommendations.length > 0 && (
        <AnimeRecommendation animeRecommendations={animeRecommendations} />
      )}
    </Box>
  );
}
