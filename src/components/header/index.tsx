import { styled } from "styled-components";
import MainLogo from "../svg/MainLogo";

import { fonts } from "../../styles/font";
import * as T from "../../styles/theme";

import { ROUTER } from "../../constants/router.constant";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Link to={ROUTER.HOME}>
          <MainLogo />
        </Link>
        <MenuContainer>
          <Link to="/">
            <MenuTitle>교내랭킹</MenuTitle>
          </Link>
          <Link to={ROUTER.DUO_REQUEST}>
            <MenuTitle>게임 같이 할사람</MenuTitle>
          </Link>
          <MenuTitle>이달의 롤창</MenuTitle>
        </MenuContainer>
      </HeaderContainer>
      <MenuContainer>
        <IdentifyButton>로그인</IdentifyButton>
        <IdentifyButton>소환사 이름 연동하기</IdentifyButton>
      </MenuContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100vw;
  height: 5rem;

  position: fixed;
  top: 0%;
  left: 0%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 2rem 2rem 2rem;
  box-sizing: border-box;
`;

const HeaderContainer = styled.div`
  width: max-content;
  height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6rem;
`;

const MenuContainer = styled.div`
  width: max-content;
  height: max-content;

  display: flex;

  gap: 2rem;
`;

const MenuTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${fonts.Regular}
  font-size: 1.125rem;
  color: ${T.gray[600]};

  cursor: pointer;
  transition: 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  padding: 0 0.5rem 0 0.5rem;

  &:hover {
    color: ${T.blue[600]};
  }
`;

const IdentifyButton = styled.div`
  width: max-content;
  height: max-content;

  padding: 0.75rem 1.25rem 0.75rem 1.25rem;
  background-color: ${T.blue[700]};

  ${fonts.Regular}
  font-size: 1rem;
  color: white;

  border-radius: 0.75rem;

  cursor: pointer;
  transition: 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    background-color: ${T.blue[600]};
  }
`;
