import { ReactNode } from "react";

export default interface FlexBoxAttribute {
  direction?: string;
  JustifyContent?: string;
  AlignItems?: string;
  Gap?: number;
  children: ReactNode;
}
