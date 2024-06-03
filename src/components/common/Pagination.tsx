import {
  Stack,
  Pagination as PaginationMui,
  Box,
  TextField,
} from "@mui/material";
import { PaginationType } from "@/stores";
import useBreakpoint from "@/hooks/useBreakpoints";

export function Pagination({
  page,
  pageCount,
  inputPage,
  handlePageChange,
  handleInputChange,
  handleSubmit,
}: PaginationType) {
  const isSmallScreen = useBreakpoint("sm");

  return (
    <Stack direction="row" position="relative">
      <PaginationMui
        sx={{ marginX: "auto", marginY: 8 }}
        count={pageCount}
        page={page}
        onChange={handlePageChange}
      />
      <Box
        position="absolute"
        component="form"
        top={isSmallScreen ? 16 : 56}
        right={0}
        display="flex"
        alignItems="center"
        onSubmit={handleSubmit}
        gap={2}
      >
        <TextField
          type="number"
          label="Go to page"
          size="small"
          value={inputPage}
          color="error"
          onChange={handleInputChange}
          InputProps={{
            inputProps: { min: 1, max: pageCount },
            sx: {
              fontSize: isSmallScreen ? "12px" : "16px",
              "& input[type=number]": {
                MozAppearance: "textfield",
                "&::-webkit-outer-spin-button": {
                  display: "none",
                },
                "&::-webkit-inner-spin-button": {
                  display: "none",
                },
              },
            },
          }}
        />
      </Box>
    </Stack>
  );
}
