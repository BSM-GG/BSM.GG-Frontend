import styled from "styled-components";
import * as T from "../../styles/theme";
import MainLogo from "../../components/svg/MainLogo";
import SearchIcon from "../../components/svg/SearchIcon";
import { fonts } from "../../styles/font";
import { ROUTER } from "../../constants/router.constant";

const LandingPage = () => {
  return (
    <>
      <Container>
        <MainLogo width={24.5} height={7.5} />
        <InputContainer>
          <NameInput placeholder="소환사 이름을 입력하세요!" />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </InputContainer>
      </Container>
    </>
  );
};

export default LandingPage;

const Container = styled.div`
  width: max-content;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4rem;
  margin-bottom: 5rem;
`;

const InputContainer = styled.div`
  width: max-content;
  height: max-content;
  display: flex;

  position: relative;
`;

const NameInput = styled.input`
  width: 45rem;
  height: 4rem;

  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  box-sizing: border-box;

  box-shadow: 0 0 0 2px ${T.blue[500]};
  border-radius: 99rem;

  ${fonts.Regular}
  color: ${T.gray[600]};
  font-size: 1.125rem;

  outline: none;

  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:focus {
    box-shadow: 0 0 0 3px ${T.blue[700]};
    transform: scale(1.01);
  }

  &::placeholder {
    color: ${T.gray[500]};
  }

  &::after {
  }
`;

const SearchButton = styled.button`
  width: fit-content;
  height: fit-content;

  position: absolute;

  right: 1.5rem;
  top: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border: none;

  cursor: pointer;
`;
