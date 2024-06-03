import { Box, Grid, Typography } from "@mui/material";
import { AnimeRecommendationType } from "@/types";
import { CardRecommendation } from "../common";
import useBreakpoint from "@/hooks/useBreakpoints";

export function AnimeRecommendation({
  animeRecommendations,
}: AnimeRecommendationType) {
  const isSmallScreen = useBreakpoint("sm");
  return (
    <Box
      paddingX={10}
      paddingTop={2}
      paddingBottom={8}
      marginTop={2}
      bgcolor="rgb(249, 250, 251)"
    >
      <Typography
        color="rgb(33, 43, 54)"
        fontWeight="800"
        fontSize={isSmallScreen ? "16px" : "20px"}
      >
        Other Recommendations
      </Typography>
      <Grid
        container
        rowSpacing={isSmallScreen ? 3 : 0}
        columnSpacing={isSmallScreen ? 0 : 3}
        marginTop={1}
      >
        {animeRecommendations.slice(0, 5).map((anime) => (
          <Grid
            width={isSmallScreen ? "100%" : "auto"}
            item
            key={anime.entry.mal_id}
          >
            <CardRecommendation
              href={anime.entry.mal_id}
              src={anime.entry.images.webp.image_url}
              title={anime.entry.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
