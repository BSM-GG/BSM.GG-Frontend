import styled from "styled-components";
import * as T from "../../styles/theme";
import { Flex, Text } from "../common";
import { fonts } from "../../styles/font";

const InGameInformation = () => {
  return (
    <Container>
      <Flex gap={0.3} direction="column">
        <Text type={fonts.Regular} color={T.red[400]} textSize={0.8}>
          킬관여 70%
        </Text>
        <Flex direction="column">
          <Text type={fonts.Regular} textSize={0.8}>
            제어 와드 4
          </Text>
          <Text type={fonts.Regular} textSize={0.8}>
            CS 152
          </Text>
        </Flex>
      </Flex>
      <Text type={fonts.Regular}>Grandmaster</Text>
    </Container>
  );
};

export default InGameInformation;

const Container = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  justify-content: space-between;
`;
