import * as S from "./style";
import SearchIcon from "../../components/svg/searchIcon700";
import TopRank from "./TopRankUser";
import { userData_dummy } from "../../dummy/userRank.dummy";
import Rank from "./RankUser";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { styled } from "styled-components";

const SchoolRank = () => {
  const [users, setUsers] = useState(userData_dummy.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0);

  const userPage = 10;
  const pageVisited = pageNumber * userPage;

  const pageCount = Math.ceil(users.length / userPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const displayUsers = users
    .slice(pageVisited, pageVisited + userPage)
    .map((user) => (
      <>{user.id <= 3 ? <TopRank user={[user]} /> : <Rank user={[user]} />}</>
    ));

  return (
    <S.Wrapper>
      <S.CenterWrapper>
        <S.RankingWrapper>
          <S.GameTogetherWrapper>
            <S.GameRankTitle>교내랭킹</S.GameRankTitle>
            <S.SearchInputWrapper>
              <S.SearchInput type="text" placeholder="소환사 검색" />
              <S.SearchIcon>
                <SearchIcon />
              </S.SearchIcon>
            </S.SearchInputWrapper>
          </S.GameTogetherWrapper>
          <S.RankNav>
            <S.UserRankNumber>#</S.UserRankNumber>
            <S.UserName>소환사</S.UserName>
            <S.UserTier>티어</S.UserTier>
            <S.UserLp>LP</S.UserLp>
            <S.UserMostChampion>모스트챔피언</S.UserMostChampion>
            <S.UserLevel>레벨</S.UserLevel>
            <S.UserWin>승률</S.UserWin>
          </S.RankNav>
        </S.RankingWrapper>
        <S.UserWrapper>{displayUsers}</S.UserWrapper>
        <S.Nav>
          <StyledPagination
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
          />
        </S.Nav>
      </S.CenterWrapper>
    </S.Wrapper>
  );
};

export default SchoolRank;

const StyledPagination = styled(ReactPaginate)`
  display: flex;
  gap: 2rem;
  cursor: pointer;
`;
