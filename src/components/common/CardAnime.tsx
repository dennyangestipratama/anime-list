import Link from "next/link";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { AnimeCardType } from "@/types";
import useBreakpoint from "@/hooks/useBreakpoints";

export function CardAnime({
  id,
  src,
  title,
  score,
  year,
  genres,
}: AnimeCardType) {
  const isSmallScreen = useBreakpoint("sm");

  return (
    <Card>
      <Link
        style={{
          position: "relative",
        }}
        href={`/anime/${id}`}
      >
        <CardActionArea
          sx={{ width: isSmallScreen ? "100%" : 200, height: 340 }}
        >
          <CardMedia
            component="img"
            src={src}
            alt={title}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Typography
            variant="body2"
            fontSize={10}
            position="absolute"
            top={6}
            right={6}
            bgcolor="#CB1C4F"
            paddingX="8px"
            paddingY="4px"
            borderRadius={40}
            fontWeight={600}
            sx={{ color: "#fff" }}
          >
            {score ?? 0}
          </Typography>
          <CardContent
            sx={{
              width: "100%",
              paddingX: 1,
              paddingY: 1,
              position: "absolute",
              bottom: 0,
              left: 0,
              backgroundColor: "#fff",
            }}
          >
            <Stack direction="row" spacing="4px">
              {genres.slice(0, 3).map((genre) => (
                <Box
                  key={genre.mal_id}
                  sx={{
                    fontSize: 8,
                    paddingX: "8px",
                    paddingY: "2px",
                    borderRadius: 10,
                    backgroundColor: "rgb(244, 246, 248)",
                    width: "fit-content",
                  }}
                >
                  {genre.name}
                </Box>
              ))}
            </Stack>
            <Typography
              variant="h5"
              fontSize="11px"
              component="div"
              marginY="8px"
              fontWeight="bold"
              sx={{
                lineHeight: "normal",
                whiteSpace: "normal",
                wordWrap: "break-word",
              }}
            >
              {title}
            </Typography>
            <Typography variant="body2" fontSize={10} color="text.secondary">
              {year ?? "Unknown"}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
