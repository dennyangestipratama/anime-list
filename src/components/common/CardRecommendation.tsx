import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { CardRecommedationType } from "@/types";
import useBreakpoint from "@/hooks/useBreakpoints";

export function CardRecommendation({
  href,
  src,
  title,
}: CardRecommedationType) {
  const isSmallScreen = useBreakpoint("sm");

  return (
    <Card>
      <Link
        style={{
          position: "relative",
        }}
        href={`/anime/${href}`}
      >
        <CardActionArea
          sx={{ width: isSmallScreen ? "100%" : 200, height: 300 }}
        >
          <CardMedia
            component="img"
            src={src}
            alt={title}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
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
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
