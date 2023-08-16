import TextContainerAttributeProps from "../../../types/TextContainerAttributeProps.type";
import { styled } from "styled-components";

const Text = styled.div<TextContainerAttributeProps>`
  ${(props) => props.type};
  font-size: ${(props) => props.TextSize};
  text-align: ${(props) => props.TextAlign};
  color: ${(props) => props.color};
`;

export default Text;
