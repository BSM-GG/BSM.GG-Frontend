import styled from "styled-components";
import * as T from "../../styles/theme";
import { fonts } from "../../styles/font";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

export const CenterWrapper = styled.div`
  width: 80vw;
  height: 100%;
`;

export const RankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GameTogetherWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const GameRankTitle = styled.div`
  color: ${T.blue[700]};
  ${fonts.Bold};
  font-size: 1.8rem;
`;

export const SearchInputWrapper = styled.div`
  width: 25%;
  height: 6vh;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid ${T.blue[700]};
`;

export const SearchInput = styled.input`
  width: 90%;
  font-size: 1rem;
  color: black;
  &::placeholder {
    color: ${T.blue[700]};
  }
`;

export const SearchIcon = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const RankNav = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  margin-top: 30px;
  background-color: ${T.blue[700]};
  display: flex;
  color: white;
`;

export const RankNumber = styled.div`
  width: 4vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.div`
  width: 30vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 10px;
`;

export const Tier = styled.div`
  width: 8vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Lp = styled.div`
  width: 8vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const MostChampion = styled.div`
  width: 14vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 0.5rem;
`;

export const Level = styled.div`
  width: 10vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Win = styled.div`
  width: 6vw;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const UserTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

export const UserWrapper = styled.div`
  width: 100%;
  height: 10%;
  margin-top: 0.5rem;
  background-color: ${T.gray[200]};
  display: flex;
`;

export const NumberTab = styled.div`
  width: 100%;
  height: 5rem;
  background-color: orange;
`;

export const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

export const Win2 = styled.div`
  width: 6vw;
  height: 100%;
  display: flex;
  align-items: center;
  color: ${T.red[400]};
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 98%;
  height: 65px;
  font-size: 1.2rem;
`;

export const ArrowNav = styled.div`
  cursor: pointer;
  &:hover {
    color: ${T.blue[700]};
    transition: 0.3s ease-in-out;
  }
`;

export const NumberNav = styled.div`
  display: flex;
  gap: 2.8rem;
  cursor: pointer;
`;
