import styled from "styled-components";
import FlexBoxAttribute from "../../../types/FlexBoxAttributeProps.type";

const Flex = styled.div<FlexBoxAttribute>`
  width: max-content;
  height: max-content;

  display: flex;

  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.JustifyContent};
  align-items: ${(props) => props.direction};
  gap: ${(props) => props.Gap}rem;
`;

export default Flex;
