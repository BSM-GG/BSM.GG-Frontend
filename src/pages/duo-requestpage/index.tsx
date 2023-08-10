import React from "react";
import * as C from "../../components";
import * as T from "../../styles/theme";
import { styled } from "styled-components";
import { fonts } from "../../styles/font";
import RequestListItem from "./RequestListItem";

const DuoRequestPage = () => {
  return (
    <Container>
      <HGroup>
        <C.Text color={T.blue[700]} size={1.5}>
          같이 게임하자
        </C.Text>
        <WriteButton />
      </HGroup>
      <RequestList>
        {Array.from({ length: 3 }).map((_, index) => (
          <RequestListItem key={index} />
        ))}
      </RequestList>
    </Container>
  );
};

export default DuoRequestPage;

const Container = styled.div`
  width: 70rem;
  height: max-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 1.5rem;
`;

const HGroup = styled.hgroup`
  width: 100%;
  display: flex;
  align-items: center;
`;

const WriteButton = styled.button`
  background-color: ${T.blue[700]};
  color: ${T.white};
  font-size: 16px;
  font-weight: ${fonts.ExtraBold};
  padding: 8px 24px;
  border: none;
  border-radius: 5px;
  margin-left: auto;

  &:after {
    content: "글쓰기";
  }
`;

const RequestList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
