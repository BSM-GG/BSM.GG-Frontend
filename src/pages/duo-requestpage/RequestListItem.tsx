import React from "react";
import { styled } from "styled-components";
import { Text } from "../../components/common";
import * as T from "../../styles/theme";
import { fonts } from "../../styles/font";

const RequestListItem = () => {
  return (
    <Container>
      <Header>
        <ProfileImage src="/images/defaultProfile.png" alt="profile" />
        <Nickname>
          <Text type={fonts.Regular}>Hide on Click</Text>
        </Nickname>
        <PeopleCount>
          <PeopleCurrentCount>3</PeopleCurrentCount>
          <PeopleMaxCount>5</PeopleMaxCount>
        </PeopleCount>
      </Header>
      <Body>
        <Text textSize={1}>같이 게임할 사람 구해요 (솔로랭크 ㄱㄱ)</Text>
        <Text textSize={0.8} color={T.gray[600]} type={fonts.Regular}>
          미드 or 정글 구함
        </Text>
      </Body>
      <Footer>
        <NicknameTextBox>
          {["나 지금 슬퍼", "React Query", "주먹밥이열린나무"].map((title) => (
            <Text textSize={0.8} color={T.gray[600]} type={fonts.Regular}>
              {title}
            </Text>
          ))}
        </NicknameTextBox>
        <RequestBox>
          <Text textSize={0.8} color={T.gray[600]} type={fonts.Regular}>
            ~ 2023-08-24
          </Text>
          <Text textSize={0.8} color={T.gray[600]} type={fonts.Regular}>
            PM 08:30
          </Text>
          <RequestButton>
            <Text textSize={0.8} color={T.white} type={fonts.Bold}>
              참가하기
            </Text>
          </RequestButton>
        </RequestBox>
      </Footer>
    </Container>
  );
};

export default RequestListItem;

const Container = styled.div`
  width: 20rem;
  height: 14rem;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 1rem 1.3rem;
  gap: 1rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ProfileImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

const Nickname = styled.div``;

const PeopleCount = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

const PeopleCurrentCount = styled.span`
  &:after {
    margin: 0 4px;
    content: "/";
  }
`;

const PeopleMaxCount = styled.span`
  color: ${T.red[700]};
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  height: max-content;
`;

const NicknameTextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.6rem;
`;

const RequestBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-left: auto;
  text-align: right;
`;

const RequestButton = styled.button`
  border: none;
  padding: 6px;
  margin-top: auto;
  background-color: ${T.blue[700]};
  border-radius: 5px;
`;
