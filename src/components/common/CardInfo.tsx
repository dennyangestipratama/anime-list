import { Box, Typography } from "@mui/material";
import { CardInfoType } from "@/types";
import useBreakpoint from "@/hooks/useBreakpoints";

export function CardInfo({ title, data }: CardInfoType) {
  const isSmallScreen = useBreakpoint("sm");
  return (
    <Box
      bgcolor="rgb(244, 246, 248)"
      width="33.33%"
      borderRadius={2}
      padding="8px 16px"
    >
      <Typography
        variant="subtitle1"
        fontSize={isSmallScreen ? "10px" : "12px"}
        color="rgb(99, 115, 129)"
      >
        {title}
      </Typography>
      <Typography
        color="rgb(33, 43, 54)"
        fontWeight="bold"
        fontSize={isSmallScreen ? "12px" : "16px"}
      >
        {data}
      </Typography>
    </Box>
  );
}
