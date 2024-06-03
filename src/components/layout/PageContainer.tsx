import { Box } from "@mui/material";
import { PageContainerType } from "@/types";

export default function PageContainer({ children }: PageContainerType) {
  return <Box marginTop={12}>{children}</Box>;
}
