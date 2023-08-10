import TextContainerAttributeProps from "../../../types/TextContainerAttributeProps.type";
import { styled } from "styled-components";
import { fonts } from "../../../styles/font";

const Text = ({
  type = fonts.Bold,
  textSize = 1,
  color = "black",
  textAlign = "left",
  children,
}: TextContainerAttributeProps) => {
  const fontSize = `${textSize}rem`;

  return (
    <TextContainer type={type} style={{ fontSize, color, textAlign }}>
      {children}
    </TextContainer>
  );
};

export default Text;

const TextContainer = styled.div<{ type: string }>`
  ${(props) => props.type};
`;
