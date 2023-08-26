import { styled } from "styled-components";
import * as T from "../../styles/theme";
import { fonts } from "../../styles/font";
import { Text } from "../../components/common";
import PlayerInfo from "./PlayerInfo";
import UserProfile from "./UserProfile";

const MostPlayer = () => {
  return (
    <Container>
      <MostPlayerWrapper>
        <MostPlayerTitle>
          <Text textSize={1.8} color={T.blue[700]} type={fonts.Bold}>
            이달의 롤창
          </Text>
        </MostPlayerTitle>
        <UserInfoWrapper>
          <UserProfileWrapper>
            <UserProfile />
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
  height: 8rem;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 1rem;
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
