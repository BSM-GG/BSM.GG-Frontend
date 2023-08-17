import TextContainerAttributeProps from "../../../types/TextContainerAttributeProps.type";
import { fonts } from "../../../styles/font";
import { styled } from "styled-components";

const Text = styled.div<TextContainerAttributeProps>`
  ${(props) => props.type ?? fonts.Bold};
  font-size: ${(props) => props.TextSize ?? 1}rem;
  text-align: ${(props) => props.TextAlign};
  color: ${(props) => props.color};
`;

export default Text;
