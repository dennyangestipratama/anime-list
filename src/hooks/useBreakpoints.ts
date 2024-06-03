import { useTheme, useMediaQuery } from "@mui/material";

const useBreakpoint = (
  breakpoint: "xs" | "sm" | "md" | "lg" | "xl"
): boolean => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(breakpoint));
  return isMatch;
};

export default useBreakpoint;
