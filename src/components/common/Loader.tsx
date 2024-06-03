import { Box, Grid, Skeleton, Stack } from "@mui/material";
import { LoaderType } from "@/types";
import useBreakpoint from "@/hooks/useBreakpoints";

export function Loader({ count }: LoaderType) {
  const isSmallScreen = useBreakpoint("sm");

  return (
    <Box marginTop={12}>
      <Grid container spacing={3} justifyContent="center">
        {Array.from({ length: count }, (_, index) => (
          <Grid item key={index}>
            <Skeleton
              variant="rounded"
              width={isSmallScreen ? 350 : 200}
              height={340}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export function DetailLoader() {
  return (
    <Box marginTop={4}>
      <Box paddingX={10} marginTop={2} display="flex">
        <Skeleton variant="rounded" width={225} height={320} />
        <Box width="100%" marginLeft={2}>
          <Box display="flex" marginBottom={4}>
            <Skeleton variant="rounded" sx={{ width: "100%" }} height={40} />
          </Box>
          <Stack direction="row" marginY="4px" spacing={2}>
            <Skeleton variant="rounded" width="33.33%" height={60} />
            <Skeleton variant="rounded" width="33.33%" height={60} />
            <Skeleton variant="rounded" width="33.33%" height={60} />
          </Stack>
          <Box marginTop="8px">
            <Skeleton variant="rounded" width="100%" height={35} />
            <Skeleton variant="rounded" width="100%" height={60} />
          </Box>
        </Box>
      </Box>
      <Box paddingX={10} paddingTop={2} paddingBottom={8}>
        <Grid container columnSpacing={3} marginTop={1}>
          {Array.from({ length: 5 }, (_, index) => (
            <Grid item key={index}>
              <Skeleton variant="rounded" width={200} height={340} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
