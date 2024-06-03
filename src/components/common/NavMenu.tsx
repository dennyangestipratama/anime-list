import Link from "next/link";
import { Badge, IconButton } from "@mui/material";
import useBreakpoint from "@/hooks/useBreakpoints";
import { NavMenuType } from "@/types";

export function NavMenu({ address, Icon, label, badgeContent }: NavMenuType) {
  const isSmallScreen = useBreakpoint("sm");
  return (
    <Link href={address} style={{ marginLeft: isSmallScreen ? "16px" : "0px" }}>
      <IconButton
        aria-label={label}
        sx={{
          width: isSmallScreen ? "12px" : "auto",
          height: isSmallScreen ? "12px" : "auto",
        }}
      >
        {badgeContent ? (
          <Badge badgeContent={badgeContent} color="error">
            <Icon />
          </Badge>
        ) : (
          <Icon />
        )}
      </IconButton>
    </Link>
  );
}
