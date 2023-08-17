import { styled } from "styled-components";
import * as T from "../../styles/theme";
import * as C from "../../components";
import { fonts } from "../../styles/font";

const UserGameRecord = () => {
  return (
    <Container>
      <GameInfoContainer>
        <C.Flex>
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
        </C.Flex>
        <C.Flex gap={2.5}>
          <C.Flex direction="column" gap={0.4}>
            <C.Text type={fonts.Regular} color={T.red[400]} textSize={1.25}>
              킬관여 70%
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
        </C.Flex>
      </GameInfoContainer>
      <RecordUnrollButton>˅</RecordUnrollButton>
    </Container>
  );
};

export default UserGameRecord;

const Container = styled.div`
  width: 59rem;
  height: 11rem;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${T.blue[300]};

  border-radius: 8px;
`;

const RecordUnrollButton = styled.div`
  width: 2.5rem;
  height: 100%;

  position: absolute;
  right: 0;
  top: 0;

  ${fonts.Regular}
  font-size: 1.5rem;
  color: white;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  cursor: pointer;

  background-color: ${T.blue[700]};
  border-radius: 8px;
  transition: 0.25s cubic-bezier(0.175, 0.885, 0.32, 1);

  &:hover {
    background-color: ${T.blue[500]};
  }

  &:active {
    background-color: ${T.blue[300]};
  }
`;

const GameInfoContainer = styled.div`
  width: max-content;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 1.25rem 0;
  box-sizing: border-box;
`;
