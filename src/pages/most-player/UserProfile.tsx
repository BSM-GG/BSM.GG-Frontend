import { styled } from "styled-components";
import * as T from "../../styles/theme";
import { fonts } from "../../styles/font";
import { Text } from "../../components/common";
import UserIcon from "../../components/jpg/userIcon";

const UserProfile = () => {
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
    <>
      <UserProfileWrapper>
        <UserImgWrapper>
          <UserIcon
            bgColor="none"
            imgLink="https://yt3.googleusercontent.com/ytc/AOPolaResdZdcww3BSR0bGFsCTfxsKd1__xFXwSxqQ4qRg=s900-c-k-c0x00ffffff-no-rj"
          />
          <UserLevelWrapper>
            <Text type={fonts.Medium} textSize={1} color="white">
              82
            </Text>
          </UserLevelWrapper>
        </UserImgWrapper>
        <UserNickNameWrapper>
          <Text type={fonts.Medium} textSize={1.8} color="black">
            Hide on Bush
          </Text>
        </UserNickNameWrapper>
      </UserProfileWrapper>
      <OddsGraph>
        <WinBar winRatio={winRatio}>52</WinBar>
        <LoseBar loseRatio={loseRatio}>48</LoseBar>
      </OddsGraph>
    </>
  );
};

export default UserProfile;

const UserProfileWrapper = styled.div`
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
