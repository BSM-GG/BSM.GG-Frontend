import { CSSProperties } from "react";

export default interface TextContainerAttributeProps {
  type?: string;
  textSize?: number;
  color?: string;
  textAlign?: CSSProperties["textAlign"];
  children: any;
}
