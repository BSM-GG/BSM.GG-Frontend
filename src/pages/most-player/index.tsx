import { styled } from "styled-components";
import * as T from "styles/theme";
import { fonts } from "styles/font";
import { Text } from "components/common";
import PlayerInfo from "./PlayerInfo";
import UserProfile from "./UserProfile";
import OneSentence from "./OneSentence";

const MostPlayer = () => {
  return (
    <Container>
      <MostPlayerWrapper>
        <MostPlayerTitle>
          <MainTitle>
            <Text textSize={1.8} color={T.blue[700]} type={fonts.Bold}>
              이달의 롤창
            </Text>
          </MainTitle>
          <SubTitle>
            <Text type={fonts.Regular}>이 유저는 지난 한 달동안..</Text>
          </SubTitle>
        </MostPlayerTitle>
        <UserInfoWrapper>
          <UserProfileWrapper>
            <UserProfile />
            <OneSentence />
          </UserProfileWrapper>
          <UserGameInfoWrapper>
            <PlayerInfo
              playerPoint={1250}
              playerFirseText={"번"}
              playerLastText={"죽었습니다"}
              textColor={"white"}
              backGroundColor={T.blue[700]}
            />
            <PlayerInfo
              playerPoint={1250}
              playerFirseText={"번"}
              playerLastText={"킬을 했습니다"}
              textColor={"white"}
              backGroundColor={T.red[300]}
            />
            <PlayerInfo
              playerPoint={1250}
              playerFirseText={"분"}
              playerLastText={"게임했습니다"}
              textColor={"black"}
              backGroundColor={T.gray[200]}
            />
            <PlayerInfo
              playerPoint={1250}
              playerFirseText={"lp"}
              playerLastText={"올렸습니다"}
              textColor={"black"}
              backGroundColor={T.gray[200]}
            />
          </UserGameInfoWrapper>
        </UserInfoWrapper>
      </MostPlayerWrapper>
    </Container>
  );
};

export default MostPlayer;

const Container = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const MostPlayerWrapper = styled.div`
  width: 80rem;
  height: 44rem;
`;

const MostPlayerTitle = styled.div`
  width: 80rem;
  height: 11rem;
  display: flex;
  justify-content: space-between;
`;

const MainTitle = styled.div`
  width: 40rem;
  height: 11rem;
  display: flex;
  align-items: center;
`;

const SubTitle = styled.div`
  width: 35.5rem;
  height: 11rem;
  display: flex;
  align-items: flex-end;
`;

const UserInfoWrapper = styled.div`
  width: 80rem;
  height: 28rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserProfileWrapper = styled.div`
  width: 37.5rem;
  height: 26rem;
`;

const UserGameInfoWrapper = styled.div`
  width: 35.5rem;
  height: 26rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;
