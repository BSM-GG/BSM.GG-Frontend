import { CSSProperties } from "react";

export default interface TextContainerAttributeProps {
  type?: string;
  TextSize?: number;
  color?: string;
  TextAlign?: CSSProperties["textAlign"];
  children: any;
}
