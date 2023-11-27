import styled from "styled-components";
import * as T from "styles/theme";
import { fonts } from "styles/font";

export const Wrapper = styled.div`
  width: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CenterWrapper = styled.div`
  width: max-content;
  height: max-content;
`;

export const RankingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GameTogetherWrapper = styled.div`
  width: 75rem;
  height: 12.5rem;
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
  width: 18.75rem;
  height: 2.5rem;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid ${T.blue[700]};
`;

export const SearchInput = styled.input`
  width: 16.875rem;
  font-size: 1rem;
  color: black;
  &::placeholder {
    color: ${T.blue[700]};
  }
`;

export const SearchIcon = styled.div`
  width: 2rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const RankNav = styled.div`
  width: 75rem;
  height: 2.5rem;
  border-radius: 5px;
  margin-top: 30px;
  background-color: ${T.blue[700]};
  display: flex;
  color: white;
`;

export const UserRankNumber = styled.div`
  width: 5rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.div`
  width: 26rem;
  display: flex;
  align-items: center;
  margin-left: 1.5rem;
`;

export const UserTier = styled.div`
  width: 4rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserLp = styled.div`
  width: 9rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserMostChampion = styled.div`
  width: 16rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.1rem;
`;

export const UserLevel = styled.div`
  width: 6.8rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const UserWin = styled.div`
  width: 4.2rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 75rem;
  height: 45rem;
`;

export const UserWrapper = styled.div`
  width: 75rem;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Img = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 98%;
  height: 3rem;
  margin-top: 3rem;
  font-size: 1.2rem;
`;

export const ArrowNav = styled.div`
  height: 1.5rem;
  cursor: pointer;
  &:hover {
    color: ${T.blue[700]};
    transition: 0.3s ease-in-out;
  }
  padding: 0 2rem 0 2rem;
`;

export const Number = styled.div`
  cursor: pointer;
  &:active {
    color: blue;
  }
`;
