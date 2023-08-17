import { styled } from "styled-components";
import * as T from "../../styles/theme";
import { fonts } from "../../styles/font";
import GameStatus from "./GameStatus";
import InGameInformation from "./InGameInformation";
import DetailedInGameInformation from "./DetailedInGameInformation";

const UserGameRecord = () => {
  return (
    <Container>
      <GameInfoContainer>
        <GameStatus />
        <DetailedInGameInformation />
        <InGameInformation />
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
  width: fit-content;
  height: 100%;

  display: flex;
  justify-content: space-between;

  padding: 1.25rem 0;
  box-sizing: border-box;
`;
