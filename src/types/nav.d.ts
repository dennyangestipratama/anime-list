import { SvgIconProps } from "@mui/material";
import { ComponentType, ReactNode } from "react";

export type NavMenuType = {
  address: string;
  label: string;
  Icon: ComponentType<SvgIconProps>;
  badgeContent?: ReactNode;
};
