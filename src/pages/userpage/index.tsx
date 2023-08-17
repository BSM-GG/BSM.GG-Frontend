import styled from "styled-components";
import * as T from "../../styles/theme";
import { Flex, Text } from "../../components/common";
import UserIcon from "../../components/jpg/userIcon";
import UserGameRecord from "../../components/UserGameRecord";
import { UserChampionInfo } from "../../components";
import { Header } from "../../components";
import { fonts } from "../../styles/font";

const UserPage = () => {
  return (
    <>
      <Header />
      <Container>
        <UserProfileContainer>
          <Flex gap={2}>
            <UserIcon
              bgColor="none"
              imgLink="https://yt3.googleusercontent.com/ytc/AOPolaResdZdcww3BSR0bGFsCTfxsKd1__xFXwSxqQ4qRg=s900-c-k-c0x00ffffff-no-rj"
            />
            <UserInfoContainer>
              <TextContainer>
                <UserLevel>LV 54</UserLevel>
                <UserName>상진콧구멍십팔센</UserName>
              </TextContainer>
              <ReloadUserRecordButton>전적 갱신</ReloadUserRecordButton>
            </UserInfoContainer>
          </Flex>
          <UserIcon
            width={11}
            imgLink="https://i.namu.wiki/i/ELjMIbhPY8bTdcaXD3XT0kHiknPMfqvATOl7zPMCESU6H4Nsit3iaKnuYpycdvq46utrS5kxpVTg383gJmWY3Q.webp"
            bgColor="none"
            imgSize="100%"
          />
        </UserProfileContainer>
        <UserRecordContainer>
          <UserRankInfoContainer>
            <Flex direction="column">
              <RankgameTypeContainer>솔로랭크</RankgameTypeContainer>
              <UserRankScoreContainer>
                <UserIcon
                  width={4.75}
                  height={4.75}
                  bgColor={T.gray[400]}
                  borderRadius={99}
                  imgSize="80%"
                  imgPosition="center 70%"
                  imgLink="https://i.namu.wiki/i/ELjMIbhPY8bTdcaXD3XT0kHiknPMfqvATOl7zPMCESU6H4Nsit3iaKnuYpycdvq46utrS5kxpVTg383gJmWY3Q.webp"
                />
                <Flex direction="column" gap={0.25}>
                  <Text textSize={1.5}>Challenger</Text>
                  <Text textSize={0.75}>524LP</Text>
                </Flex>
              </UserRankScoreContainer>
            </Flex>
            <Flex direction="column">
              <RankgameTypeContainer>자유랭크</RankgameTypeContainer>
              <UserRankScoreContainer>
                <UserIcon
                  width={4.75}
                  height={4.75}
                  bgColor={T.gray[400]}
                  borderRadius={99}
                  imgSize="80%"
                  imgPosition="center 70%"
                  imgLink="https://i.namu.wiki/i/ELjMIbhPY8bTdcaXD3XT0kHiknPMfqvATOl7zPMCESU6H4Nsit3iaKnuYpycdvq46utrS5kxpVTg383gJmWY3Q.webp"
                />
                <Flex direction="column" gap={0.25}>
                  <Text textSize={1.5}>Challenger</Text>
                  <Text textSize={0.75}>524LP</Text>
                </Flex>
              </UserRankScoreContainer>
            </Flex>
            <UserChampionInfoContainer>
              {Array.from({ length: 5 }).map(() => (
                <UserChampionInfo />
              ))}
            </UserChampionInfoContainer>
          </UserRankInfoContainer>
          <Flex direction="column" gap={1}>
            <UserRecordHeaderContainer>
              <Flex gap={3.7}>
                <Text type={fonts.Regular} textSize={1.1}>
                  전체
                </Text>
                <Text type={fonts.Regular} textSize={1.1}>
                  솔로랭크
                </Text>
                <Text type={fonts.Regular} textSize={1.1}>
                  자유랭크
                </Text>
              </Flex>
              <SearchUserChampionRecordInput placeholder="챔피언 검색" />
            </UserRecordHeaderContainer>
            <UserGameRecord />
            <UserGameRecord />
            <UserGameRecord />
            <UserGameRecord />
            <UserGameRecord />
            <UserGameRecord />
          </Flex>
        </UserRecordContainer>
      </Container>
    </>
  );
};

export default UserPage;

const Container = styled.div`
  width: max-content;
  height: max-content;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin: 13.5rem 0;
`;

const UserProfileContainer = styled.div`
  width: 85rem;
  height: 13.75rem;

  background: linear-gradient(to right, #e8ffff, #1b7092);
  box-shadow: 0px 0px 20px #92f2ff;

  padding: 2.5rem;
  box-sizing: border-box;

  border-radius: 0.5rem;

  display: flex;
  justify-content: space-between;
`;

const UserInfoContainer = styled.div`
  width: max-content;
  height: 8.75rem;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;

const TextContainer = styled.div`
  width: max-content;
  height: max-content;

  display: flex;
  flex-direction: column;

  gap: 0.25rem;
`;

const UserLevel = styled.span`
  ${fonts.Regular}
  color: ${T.gray[600]};

  font-size: 1rem;
`;

const UserName = styled.span`
  ${fonts.Bold}
  color: black;

  font-size: 2rem;
`;

const ReloadUserRecordButton = styled.div`
  width: max-content;
  height: max-content;

  padding: 0.6rem 1.5rem 0.6rem 1.5rem;
  background-color: ${T.blue[700]};

  ${fonts.Regular}
  font-size: 1rem;
  color: white;

  border-radius: 0.625rem;

  cursor: pointer;
  transition: 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    background-color: ${T.blue[600]};
  }
`;

const UserRecordContainer = styled.div`
  width: 85rem;
  height: max-content;

  display: flex;
  gap: 1rem;
`;

const UserRankInfoContainer = styled.div`
  display: flex;

  flex-direction: column;
  gap: 1.25rem;
`;

const RankgameTypeContainer = styled.div`
  width: 25rem;
  height: 2.625rem;

  border-radius: 0.5rem;
  margin-bottom: 0.5rem;

  background-color: ${T.gray[300]};

  ${fonts.Bold}
  font-size: 0.925rem;
  color: black;

  padding: 0.75rem 1.25rem;
  box-sizing: border-box;
`;

const UserRankScoreContainer = styled.div`
  width: 25rem;
  height: 8.125rem;

  display: flex;
  gap: 1rem;

  border-radius: 0.625rem;

  padding: 1.75rem;
  box-sizing: border-box;

  background-color: ${T.gray[100]};
`;

const UserChampionInfoContainer = styled.div`
  width: max-content;
  height: max-content;

  padding: 1rem;

  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  background-color: ${T.gray[100]};
  border-radius: 0.625rem;
`;

const UserRecordHeaderContainer = styled.div`
  width: 59rem;
  height: 3.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${T.gray[300]};

  padding: 1rem 2rem;
  box-sizing: border-box;

  border-radius: 8px;
`;

const SearchUserChampionRecordInput = styled.input`
  width: 13.25rem;
  height: 2rem;

  background-color: white;
  border: none;
  outline: none;

  ${fonts.Regular}
  font-size: 0.9rem;

  border-radius: 8px;

  padding: 0.75rem 0.75rem;
  box-sizing: border-box;
`;
