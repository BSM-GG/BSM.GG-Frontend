import React from "react";
import styled from "styled-components";
import { Flex } from "../../components/common";
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

interface TopRankProps {
  filledData: UserData[];
}

const TopRank: React.FC<TopRankProps> = ({ filledData }) => {
  console.log(filledData[0].id);
  return (
    <>
      {filledData.map((data) => (
        <UserInformationWrapper key={data.id}>
          <Flex>
            <UserProfileIm>
              <UserProfileImg src={data.profile_icon} alt="" />
            </UserProfileIm>
          </Flex>
        </UserInformationWrapper>
      ))}
    </>
  );
};

export default TopRank;

const UserInformationWrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: white;
  border-radius: 0.3rem;
  border: 1px solid ${T.blue[700]};
  box-shadow: rgba(43, 160, 255, 0.5) 0px 2px 4px 1px;
`;

const UserProfileImg = styled.img`
  border-radius: 50%;
  width: 3.3rem;
  height: 3.3rem;
`;

const UserProfileIm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
`;
