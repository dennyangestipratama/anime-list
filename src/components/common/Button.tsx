import { Button } from "@mui/joy";
import { IconButton, Typography } from "@mui/material";
import { ArrowBack, YouTube } from "@mui/icons-material";
import { ButtonFavoriteType, ButtonTrailerType, ButtonType } from "@/types";
import useBreakpoint from "@/hooks/useBreakpoints";

export function ButtonTrailer({ handleClick, url }: ButtonTrailerType) {
  return (
    <Button
      variant="plain"
      onClick={handleClick}
      disabled={!url}
      sx={{
        color: url ? "#CB1C4F" : "rgb(99, 115, 129)",
        "&:hover": {
          bgcolor: "#CB1C4F",
          color: "#fff",
        },
      }}
    >
      <YouTube
        fontSize="small"
        sx={{
          marginRight: "6px",
        }}
      />
      <Typography fontSize="12px">
        {url ? "Watch the trailer here" : "Trailer is unavailable"}
      </Typography>
    </Button>
  );
}

export function ButtonFavorite({
  isFavorite,
  handleClick,
}: ButtonFavoriteType) {
  const isSmallScreen = useBreakpoint("sm");
  return (
    <Button
      sx={{
        fontSize: isSmallScreen ? "10px" : "14px",
        bgcolor: isFavorite ? "#fff" : "#CB1C4F",
        color: isFavorite ? "#CB1C4F" : "#fff",
        "&:hover": {
          bgcolor: "rgb(180, 25, 70)",
          color: "#fff",
        },
      }}
      onClick={handleClick}
    >
      {isFavorite ? "Remove from favorite" : "Add to favorite"}
    </Button>
  );
}

export function ButtonBack({ handleClick }: ButtonType) {
  return (
    <IconButton
      onClick={handleClick}
      sx={{
        width: 40,
        height: 40,
        borderRadius: "50%",
        color: "#CB1C4F",
      }}
    >
      <ArrowBack />
    </IconButton>
  );
}
