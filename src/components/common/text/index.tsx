import TextContainerAttributeProps from "../../../types/TextContainerAttributeProps.type";
import { styled } from "styled-components";
import { fonts } from "../../../styles/font";

const Text = ({
  type = fonts.Bold,
  size = 1,
  color = "black",
  children,
}: TextContainerAttributeProps) => {
  return (
    <TextContainer style={{ type, size, color, children }}>
      {children}
    </TextContainer>
  );
};

export default Text;

const TextContainer = styled.div<{ style: TextContainerAttributeProps }>`
  ${(props) => props.style.type};
  font-size: ${(props) => props.style.size}rem;

  color: ${(props) => props.style.color};
`;
