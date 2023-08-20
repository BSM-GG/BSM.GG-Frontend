import { styled } from "styled-components";
import * as T from "../../styles/theme";
import { fonts } from "../../styles/font";
import GameStatus from "./GameStatus";
import InGameInformation from "./InGameInformation";
import DetailedInGameInformation from "./DetailedInGameInformation";
import { Text } from "../common";
import { Flex } from "../common";
import UserIcon from "../jpg/userIcon";

const UserGameRecord = () => {
  return (
    <Container>
      <GameInfoContainer>
        <GameStatus />
        <DetailedInGameInformation />
        <InGameInformation />
      </GameInfoContainer>
      <GamePlayerListContainer>
        {Array.from({ length: 10 }).map(() => (
          <Flex alignItems="center" gap={0.5}>
            <UserIcon
              width={1.25}
              height={1.25}
              imgLink="assets/champion_portrait/Aatrox.webp"
              borderRadius={5}
            />
            <DisplayGamePlayerName type={fonts.Medium} textSize={0.75}>
              주먹밥이열린나무wefwefa
            </DisplayGamePlayerName>
          </Flex>
        ))}
      </GamePlayerListContainer>
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
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;

  padding: 1.25rem 5rem 1.25rem 2rem;
  box-sizing: border-box;
`;

const GamePlayerListContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 0.5rem;

  background-color: ${T.blue[200]};

  padding: 0.5rem;
  margin-right: 5rem;

  border-radius: 5px;
`;

const DisplayGamePlayerName = styled(Text)`
  width: 4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
