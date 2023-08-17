import { ReactNode } from "react";

export default interface FlexBoxAttribute {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
  children: ReactNode;
}
