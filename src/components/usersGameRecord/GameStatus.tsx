import styled from "styled-components";
import * as T from "styles/theme";
import { Flex, Text } from "../common";
import { fonts } from "styles/font";

const GameStatus = () => {
  return (
    <Container>
      <Flex direction="column" gap={0.4}>
        <Text type={fonts.Regular} color={T.blue[700]} textSize={1.25}>
          솔랭
        </Text>
        <Text type={fonts.Regular} color={T.gray[700]}>
          2 일전
        </Text>
      </Flex>
      <Flex direction="column" gap={0.4}>
        <Text type={fonts.Regular} color={T.gray[700]}>
          승리
        </Text>
        <Text type={fonts.Regular} color={T.gray[700]}>
          16분 18초
        </Text>
      </Flex>
    </Container>
  );
};

export default GameStatus;

const Container = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
