import React from "react";
import { styled } from "styled-components";
import * as T from "../../styles/theme";
import { fonts } from "../../styles/font";
import { Text } from "../../components/common";
import UserIcon from "../../components/jpg/userIcon";

const MostPlayer = () => {
  const calculateRatio = (win: number, lose: number) => {
    const total = win + lose;
    const winRatio = (win / total) * 10;
    const loseRatio = (lose / total) * 10;
    return { winRatio, loseRatio };
  };

  const winCount = 52;
  const loseCount = 48;
  const { winRatio, loseRatio } = calculateRatio(winCount, loseCount);

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
            <UserProfile>
              <UserImgWrapper>
                <UserIcon
                  bgColor="none"
                  imgLink="https://yt3.googleusercontent.com/ytc/AOPolaResdZdcww3BSR0bGFsCTfxsKd1__xFXwSxqQ4qRg=s900-c-k-c0x00ffffff-no-rj"
                />
                <UserLevelWrapper>
                  <Text type={fonts.Medium} textSize={1} color={"white"}>
                    82
                  </Text>
                </UserLevelWrapper>
              </UserImgWrapper>
              <UserNickNameWrapper>
                <Text type={fonts.Medium} textSize={1.8} color={"black"}>
                  Hide on Bush
                </Text>
              </UserNickNameWrapper>
            </UserProfile>
            <OddsGraph>
              <WinBar winRatio={winRatio}>52</WinBar>
              <LoseBar loseRatio={loseRatio}>48</LoseBar>
            </OddsGraph>
          </UserProfileWrapper>
          <UserGameInfoWrapper>
            <UserGameInfoKill>
              <UserTotalNum>
                <Text color={"white"} textSize={1} type={fonts.Regular}>
                  총
                </Text>
              </UserTotalNum>
              <UserTotalKillNum>
                <Text color={"white"} textSize={3} type={fonts.Regular}>
                  1250
                </Text>
                <Text color={"white"} textSize={1} type={fonts.Regular}>
                  번
                </Text>
              </UserTotalKillNum>
              <UserTotalText>
                <Text color={"white"} textSize={1} type={fonts.Regular}>
                  죽었습니다
                </Text>
              </UserTotalText>
            </UserGameInfoKill>
            <UserGameInfoDead>
              <UserTotalNum>
                <Text color={"white"} textSize={1} type={fonts.Regular}>
                  총
                </Text>
              </UserTotalNum>
              <UserTotalKillNum>
                <Text color={"white"} textSize={3} type={fonts.Regular}>
                  1250
                </Text>
                <Text color={"white"} textSize={1} type={fonts.Regular}>
                  번
                </Text>
              </UserTotalKillNum>
              <UserTotalText>
                <Text color={"white"} textSize={1} type={fonts.Regular}>
                  킬을 했습니다
                </Text>
              </UserTotalText>
            </UserGameInfoDead>
            <UserGameInfo>
              <UserTotalNum>
                <Text textSize={1} type={fonts.Regular}>
                  평균
                </Text>
              </UserTotalNum>
              <UserTotalKillNum>
                <Text textSize={3} type={fonts.Regular}>
                  1250
                </Text>
                <Text textSize={1} type={fonts.Regular}>
                  분
                </Text>
              </UserTotalKillNum>
              <UserTotalText>
                <Text textSize={1} type={fonts.Regular}>
                  게임했습니다
                </Text>
              </UserTotalText>
            </UserGameInfo>
            <UserGameInfo>
              <UserTotalNum>
                <Text textSize={1} type={fonts.Regular}>
                  총
                </Text>
              </UserTotalNum>
              <UserTotalKillNum>
                <Text textSize={3} type={fonts.Regular}>
                  1250
                </Text>
                <Text textSize={1} type={fonts.Regular}>
                  lp
                </Text>
              </UserTotalKillNum>
              <UserTotalText>
                <Text textSize={1} type={fonts.Regular}>
                  올랐습니다
                </Text>
              </UserTotalText>
            </UserGameInfo>
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

const UserProfile = styled.div`
  width: 37.5rem;
  height: 12rem;
  background-color: ${T.gray[400]};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserImgWrapper = styled.div`
  width: 12rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserNickNameWrapper = styled.div`
  width: 25.5rem;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const UserLevelWrapper = styled.div`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${T.gray[600]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8.5rem;
  border-radius: 50%;
`;

const OddsGraph = styled.div`
  width: 100%;
  height: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
`;

const WinBar = styled.div<{ winRatio: number }>`
  flex: ${(props) => props.winRatio};
  background-color: ${T.blue[700]};
  border-radius: 0.5rem 0 0 0.5rem;
  display: flex;
  align-items: center;
  color: white;
  padding-left: 0.5rem;
`;

const LoseBar = styled.div<{ loseRatio: number }>`
  flex: ${(props) => props.loseRatio};
  background-color: ${T.red[700]};
  border-radius: 0 0.5rem 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.5rem;
  color: white;
`;

const CommonUserGameInfo = styled.div`
  width: 15rem;
  height: 10rem;
  border-radius: 0.5rem;
`;

export const UserGameInfo = styled(CommonUserGameInfo)`
  background-color: ${T.gray[200]};
  padding: 1rem;
`;

export const UserGameInfoDead = styled(CommonUserGameInfo)`
  background-color: ${T.red[300]};
  padding: 1rem;
`;

export const UserGameInfoKill = styled(CommonUserGameInfo)`
  background-color: ${T.blue[700]};
  padding: 1rem;
`;

export const UserTotalNum = styled.div`
  width: 100%;
  height: 2rem;
`;

export const UserTotalKillNum = styled.div`
  width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const UserTotalText = styled.div`
  width: 100%;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
