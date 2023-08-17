import styled from "styled-components";
import FlexBoxAttribute from "../../../types/FlexBoxAttributeProps.type";

const Flex = styled.div<FlexBoxAttribute>`
  width: fit-content;
  height: fit-content;

  display: flex;

  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.direction};
  gap: ${(props) => props.gap}rem;
`;

export default Flex;
