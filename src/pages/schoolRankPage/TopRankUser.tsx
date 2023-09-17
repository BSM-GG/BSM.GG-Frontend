import React from "react";
import styled from "styled-components";
import { Flex } from "components/common";
import { fonts } from "styles/font";
import * as T from "styles/theme";
import Challenger from "components/svg/image 153.svg";
import GrandMaster from "components/svg/Grandmaster.svg";
import Master from "components/svg/Master.svg";

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
  name: string;
}

interface TopRankProps {
  user: UserData[];
}

const TopRank: React.FC<TopRankProps> = ({ user }) => {
  console.log(user);
  return (
    <>
      {user.map((data) => (
        <UserInformationWrapper key={data.id} userId={data.id}>
          <Flex>
            <UserProfileInfo>
              <UserProfileImg src={data.profile_icon} alt="" />
              {data.id === 1 ? (
                <UserChallengerMasterTier src={Challenger} alt="" />
              ) : data.id === 2 ? (
                <UserGrandMasterTier src={GrandMaster} alt="" />
              ) : (
                <UserMasterTier src={Master} alt="" />
              )}
            </UserProfileInfo>
            <UserNameWrapper>
              <UserNickName>
                <Flex direction="column">{data.user_name}</Flex>
                <UserName>{data.name}</UserName>
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

export default TopRank;

const UserInformationWrapper = styled.div<{ userId: number }>`
  width: 100%;
  height: 5rem;
  background-color: white;
  border-radius: 0.3rem;
  border: ${({ userId }) =>
    userId === 1
      ? `1px solid ${T.blue[800]}`
      : userId === 2
      ? `1px solid ${T.red[800]}`
      : `1px solid ${T.pink[100]}`};
  box-shadow: ${({ userId }) =>
    userId === 1
      ? "rgba(43, 160, 255, 0.5) 0px 2px 4px 1px"
      : userId === 2
      ? "rgba(255, 16, 16, 0.5) 0px 2px 4px 1px"
      : "rgba(251, 30, 255, 0.5) 0px 2px 4px 1px"};
`;

const UserProfileImg = styled.img`
  border-radius: 50%;
  width: 3.3rem;
  height: 3.3rem;
`;

const UserProfileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
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
  width: 28.5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  color: black;
`;

export const UserNickName = styled.div`
  margin-left: 1.25rem;
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
