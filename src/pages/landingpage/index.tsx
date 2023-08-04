import styled from "styled-components";
import * as C from "../../components/index";
import * as T from "../../styles/theme";
import MainLogo from "../../components/svg/mainLogo";
import SearchIcon from "../../components/svg/searchIcon";
import { fonts } from "../../styles/font";

const LandingPage = () => {
  return (
    <>
      <C.Header />
      <Container>
        <MainLogo width={24.588} height={7.438}></MainLogo>
        <InputContainer>
          <InputSideButton position="left" />
          <NameInput placeholder="소환사 이름을 입력하세요!" />
          <InputSideButton position="right">
            <SearchIcon />
          </InputSideButton>
        </InputContainer>
      </Container>
    </>
  );
};

export default LandingPage;

const Container = styled.div`
  width: max-content;
  height: max-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4rem;
`;

const InputContainer = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
`;

const InputSideButton = styled.button<{ position: string }>`
  width: 4rem;
  height: 4rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;

  border: 3px solid ${T.blue[600]};

  ${(props) =>
    props.position === "left"
      ? "border-top-left-radius: 9.25rem; border-bottom-left-radius: 9.25rem;"
      : "border-top-right-radius: 9.25rem; border-bottom-right-radius: 9.25rem;"}

  ${(props) =>
    props.position === "left"
      ? " border-width: 3px 0px 3px 3px;"
      : " border-width: 3px 3px 3px 0px;"}
`;

const NameInput = styled.input`
  width: 34rem;
  height: 4rem;

  padding: 1.5rem 0 1.5rem 0;
  box-sizing: border-box;

  border: 3px solid ${T.blue[600]};
  border-width: 3px 0px 3px 0px;

  ${fonts.Regular}
  color: ${T.gray[600]};
  font-size: 1.125rem;

  outline: none;

  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &::placeholder {
    color: ${T.gray[500]};
  }
`;
