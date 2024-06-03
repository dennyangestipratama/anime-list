import Link from "next/link";
import { Box, Breadcrumbs as MuiBreadcrumbs, Typography } from "@mui/material";
import { BreadcrumbsType } from "@/types";

export function Breadcrumbs({ title }: BreadcrumbsType) {
  return (
    <Box>
      <MuiBreadcrumbs aria-label="breadcrumb">
        <Link href="/" passHref>
          <Typography variant="body1" fontSize="12px" color="rgb(99, 115, 129)">
            Home
          </Typography>
        </Link>
        <Typography variant="body1" fontSize="12px" color="rgb(145, 158, 171)">
          {title}
        </Typography>
      </MuiBreadcrumbs>
    </Box>
  );
}
