import { ReactNode } from "react";
import styled from "styled-components";
import FlexBoxAttribute from "../../types/FlexBoxAttributeProps.type";

const Flex = (
  {
    direction = "row",
    justifyContent = "flex-start",
    alignItems = "flex-start",
    gap = 0,
  }: FlexBoxAttribute,
  children: ReactNode
) => {
  return (
    <FlexBox FlexInfo={{ direction, justifyContent, alignItems, gap }}>
      {children}
    </FlexBox>
  );
};

export default Flex;

const FlexBox = styled.div<{ FlexInfo: FlexBoxAttribute }>`
  width: max-content;
  height: max-content;

  display: flex;

  flex-direction: ${(props) => props.FlexInfo.direction};
  justify-content: ${(props) => props.FlexInfo.justifyContent};
  align-items: ${(props) => props.FlexInfo.direction};
  gap: ${(props) => props.FlexInfo.gap}rem;
`;
