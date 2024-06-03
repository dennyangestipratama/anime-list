"use client";

import Link from "next/link";
import { Home, Favorite } from "@mui/icons-material";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Search, NavMenu } from "../common";
import { useFavoriteAnimeStore } from "@/stores";
import useBreakpoint from "@/hooks/useBreakpoints";

export default function Header() {
  const favoriteAnimeCount = useFavoriteAnimeStore(
    (state) => state.favoriteAnime.length
  );
  const isSmallScreen = useBreakpoint("sm");

  return (
    <Box
      width="100%"
      position="fixed"
      top={0}
      left={0}
      marginLeft="auto"
      bgcolor="white"
      zIndex={20}
      sx={{ boxShadow: "0px 0px 8px 0px rgba(145, 158, 171, 0.32)" }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent={isSmallScreen ? "center" : "normal"}
        height={60}
      >
        {!isSmallScreen && (
          <Grid md={2} textAlign="center">
            <Link href="/">
              <Typography color="#CB1C4F" fontWeight={800}>
                AnimeList
              </Typography>
            </Link>
          </Grid>
        )}
        <Grid xs={8}>
          <Search />
        </Grid>
        <Grid xs={2}>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={isSmallScreen ? 0 : 1}
          >
            <NavMenu label="home" Icon={Home} address="/" />
            <NavMenu
              label="favorite"
              Icon={Favorite}
              address="/favorite"
              badgeContent={favoriteAnimeCount}
            />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
