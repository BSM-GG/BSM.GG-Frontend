import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/common";
import { fonts } from "../../styles/font";
import * as T from "../../styles/theme";

export interface UserData {
  id: number;
  title: string;
  user_name: string;
  profile_icon: string;
  tier: string;
  lp: number;
  most_one: string;
  most_two: string;
  most_three: string;
  level: number;
  win: number;
}

interface RankProps {
  user: UserData[];
}

const RankUser: React.FC<RankProps> = ({ user }) => {
  console.log(user);
  return (
    <>
      {user.map((data) => (
        <UserInformationWrapper key={data.id} userId={data.id}>
          <Flex>
            <UserRankNumber>{data.id}</UserRankNumber>
            <UserProfileInfo>
              <UserProfileImg src={data.profile_icon} alt="" />
            </UserProfileInfo>
            <UserNameWrapper>
              <UserNickName>
                <Flex direction="column">{data.user_name}</Flex>
                <UserName>{data.user_name}</UserName>
              </UserNickName>
            </UserNameWrapper>
            <UserTier>{data.tier}</UserTier>
            <UserLp>{data.lp}</UserLp>
            <UserMostChampion>
              <UserMostChampions src={data.most_one} />
              <UserMostChampions src={data.most_two} />
              <UserMostChampions src={data.most_three} />
            </UserMostChampion>
            <UserLevel>{data.level}</UserLevel>
            <UserOdds userOdds={data.win}>{data.win} %</UserOdds>
          </Flex>
        </UserInformationWrapper>
      ))}
    </>
  );
};

export default RankUser;

const UserInformationWrapper = styled.div<{ userId: number }>`
  width: 100%;
  height: 5rem;
  background-color: white;
  border-radius: 0.3rem;
  background-color: ${T.gray[100]};
  display: flex;
`;

const UserRankNumber = styled.div`
  width: 3rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${fonts.Medium};
`;

const UserProfileImg = styled.img`
  border-radius: 50%;
  width: 3.3rem;
  height: 3.3rem;
`;

const UserProfileInfo = styled.div`
  display: flex;
  align-items: center;
  width: 4rem;
  height: 5rem;
  margin-left: 0.5rem;
`;

export const UserMasterTier = styled.img`
  position: absolute;
  width: 5rem;
  height: 5rem;
  margin: 1rem 0 0 0.45rem;
`;

export const UserGrandMasterTier = styled.img`
  position: absolute;
  width: 5rem;
  height: 3.5rem;
  margin-top: 1rem;
`;

export const UserChallengerMasterTier = styled.img`
  position: absolute;
  width: 4.3rem;
  height: 4.5rem;
  margin-top: 1.4rem;
`;

export const UserNameWrapper = styled.div`
  width: 26rem;
  height: 5rem;
  display: flex;
  align-items: center;
  color: black;
`;

export const UserNickName = styled.div`
  ${fonts.Bold}
  font-size: 1rem;
`;

export const UserName = styled.div`
  ${fonts.Regular}
  font-size: 0.8rem;
  margin-top: 0.3rem;
`;

export const UserTier = styled.div`
  width: 6.8rem;
  height: 5rem;
  display: flex;
  align-items: center;
  color: black;
  ${fonts.Medium};
`;

export const UserLp = styled.div`
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  color: black;
  ${fonts.Medium};
`;

export const UserMostChampion = styled.div`
  width: 16rem;
  height: 5rem;
  display: flex;
  align-items: center;
`;

export const UserMostChampions = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 0.3rem;
`;

export const UserLevel = styled.div`
  width: 8rem;
  height: 5rem;
  display: flex;
  ${fonts.Medium};
  align-items: center;
  color: black;
`;

export const UserOdds = styled.div<{ userOdds: number }>`
  width: 5.7rem;
  height: 5rem;
  display: flex;
  align-items: center;
  color: ${({ userOdds }) =>
    userOdds >= 55
      ? `${T.red[700]}`
      : userOdds < 50
      ? `${T.blue[700]}`
      : `${T.gray[700]}`};
  ${fonts.Medium};
`;
