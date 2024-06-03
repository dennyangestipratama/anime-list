import Link from "next/link";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useSearchHistoryStore } from "@/stores";
import { SearchHistoryType } from "@/types";
import { Close, DeleteOutline, RotateLeft } from "@mui/icons-material";
import useBreakpoint from "@/hooks/useBreakpoints";

export function SearchHistory({ handleClose }: SearchHistoryType) {
  const isSmallScreen = useBreakpoint("sm");

  const searchHistory = useSearchHistoryStore((state) => state.searchHistory);
  const deleteSearchHistory = useSearchHistoryStore(
    (state) => state.deleteSearchHistory
  );

  const clearSearchHistory = useSearchHistoryStore(
    (state) => state.clearSearchHistory
  );

  const handleDelete = (query: string) => {
    deleteSearchHistory(query);
    handleClose();
  };

  const handleDeleteAll = () => {
    clearSearchHistory();
    handleClose();
  };

  return (
    <Box
      position="absolute"
      sx={{
        width: "100%",
        background: "#fff",
        boxShadow: "rgba(161, 160, 166, 0.12) 0px 8px 8px",
        top: "3rem",
        padding: "12px",
        borderRadius: "12px",
        zIndex: 99,
        pointerEvents: "auto",
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingBottom={2}
      >
        <Typography
          sx={{
            color: "rgb(99, 115, 129)",
            fontWeight: "800",
            fontSize: isSmallScreen ? "12px" : "16px",
          }}
        >
          Search History
        </Typography>
        <Box display="flex" alignItems="center">
          <Button
            onClick={handleDeleteAll}
            variant="text"
            sx={{
              color: "#CB1C4F",
              fontSize: isSmallScreen ? "12px" : "16px",
            }}
          >
            Delete All
          </Button>
          <IconButton onClick={handleClose}>
            <Close fontSize="small" sx={{ color: "#CB1C4F" }} />
          </IconButton>
        </Box>
      </Box>
      {searchHistory.map((item, index) => (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginBottom="6px"
          key={index}
        >
          <Link href={`/browse/${item}`} onClick={handleClose}>
            <Box display="flex" alignItems="center" sx={{ cursor: "pointer" }}>
              <RotateLeft
                sx={{ color: "rgb(73, 73, 231)", marginRight: "4px" }}
                fontSize="small"
              />
              <Typography
                sx={{ color: "#212B36", fontSize: "14px" }}
                key={index}
              >
                {item}
              </Typography>
            </Box>
          </Link>
          <IconButton onClick={() => handleDelete(item)}>
            <DeleteOutline
              sx={{
                color: "#CB1C4F",
                cursor: "pointer",
              }}
              fontSize="small"
            />
          </IconButton>
        </Box>
      ))}
    </Box>
  );
}
