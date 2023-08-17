import styled from "styled-components";
import * as C from "../index";
import * as T from "../../styles/theme";
import { fonts } from "../../styles/font";

const GameStatus = () => {
  return (
    <Container>
      <C.Flex direction="column" gap={0.4}>
        <C.Text type={fonts.Regular} color={T.blue[700]} textSize={1.25}>
          솔랭
        </C.Text>
        <C.Text type={fonts.Regular} color={T.gray[700]}>
          2 일전
        </C.Text>
      </C.Flex>
      <C.Flex direction="column" gap={0.4}>
        <C.Text type={fonts.Regular} color={T.gray[700]}>
          승리
        </C.Text>
        <C.Text type={fonts.Regular} color={T.gray[700]}>
          16분 18초
        </C.Text>
      </C.Flex>
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
