import { fonts } from "../../styles/font";
import { Text } from "../../components/common";
import { styled } from "styled-components";
import * as T from "../../styles/theme";

interface playerInfo {
  playerPoint: number;
  playerFirseText: string;
  playerLastText: string;
  textColor: string;
  backGroundColor: string;
}
const PlayerInfo: React.FC<playerInfo> = ({
  playerPoint,
  playerFirseText,
  playerLastText,
  textColor,
  backGroundColor,
}) => {
  return (
    <UserGameInfo backGroundColor={backGroundColor}>
      <UserTotalNum>
        <Text color={textColor} textSize={1} type={fonts.Regular}>
          총
        </Text>
      </UserTotalNum>
      <UserTotalKillNum>
        <Text color={textColor} textSize={3} type={fonts.Regular}>
          {playerPoint}
        </Text>
        <Text color={textColor} textSize={1} type={fonts.Regular}>
          {playerFirseText}
        </Text>
      </UserTotalKillNum>
      <UserTotalText>
        <Text color={textColor} textSize={1} type={fonts.Regular}>
          {playerLastText}
        </Text>
      </UserTotalText>
    </UserGameInfo>
  );
};

export default PlayerInfo;

const CommonUserGameInfo = styled.div`
  width: 15rem;
  height: 10rem;
  border-radius: 0.5rem;
`;

export const UserGameInfo = styled(CommonUserGameInfo)<{
  backGroundColor: string;
}>`
  background-color: ${({ backGroundColor }) => backGroundColor};
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
