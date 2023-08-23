import styled, { keyframes } from "styled-components";
import * as T from "../../styles/theme";
import { Flex, Text } from "../common";
import { fonts } from "../../styles/font";
import UserIcon from "../jpg/userIcon";

const DetailedGameInformation = (props: {show: boolean}) => {
  return (<>{ props.show &&
    <Container>
      <TeamContainer>
        <GamePlayerInfo>히히유</GamePlayerInfo>
        <GamePlayerInfo>히히유</GamePlayerInfo>
        <GamePlayerInfo>히히유</GamePlayerInfo>
        <GamePlayerInfo>히히유</GamePlayerInfo>
        <GamePlayerInfo>히히유</GamePlayerInfo>
      </TeamContainer>
      <TeamContainer>
        <GamePlayerInfo>히히유</GamePlayerInfo>
        <GamePlayerInfo>히히유</GamePlayerInfo>
        <GamePlayerInfo>히히유</GamePlayerInfo>
        <GamePlayerInfo>히히유</GamePlayerInfo>
        <GamePlayerInfo>히히유</GamePlayerInfo>
      </TeamContainer>
    </Container>}</>
  );
};

export default DetailedGameInformation;

const ShowContainer = keyframes`
  from {
    width: 59rem;
    height: 0;
    opacity: 0.1;
  }

  to {
    width: 59rem;
    height: 20rem;
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  background-color: ${T.gray[400]};
  width: 59rem;
  height: 20rem;

  top: 12rem;

  border-radius: 8px;

  animation: ${ShowContainer} 0.75s cubic-bezier(0.385, 0.675, 0.32, 1);

  display: flex;
  flex-direction: column;

  z-index: 1;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;

`;

const GamePlayerInfo = styled.div`
  width: fit-content;
  height: fit-content;

  padding: 0.25rem;
`;