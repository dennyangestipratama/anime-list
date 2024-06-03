import { Box, Typography } from "@mui/material";
import { TextIconType } from "@/types";

export function TextIcon({ title, Icon }: TextIconType) {
  return (
    <Box display="flex" alignItems="center">
      <Icon
        fontSize="small"
        sx={{ color: "rgb(33, 43, 54)", marginRight: "6px" }}
      />
      <Typography color="rgb(33, 43, 54)" fontSize="12px">
        {title}
      </Typography>
    </Box>
  );
}
