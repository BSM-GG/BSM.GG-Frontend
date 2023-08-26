import * as S from "./style";
import SearchIcon from "../../components/svg/searchIcon700";
import TopRank from "./TopRankUser";
import { userData_dummy } from "../../dummy/userRank.dummy";
import Rank from "./RankUser";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { styled } from "styled-components";
import { Text } from "../../components/common";
import { fonts } from "../../styles/font";
import * as T from "../../styles/theme";

const SchoolRank = () => {
  const [users, setUsers] = useState(userData_dummy.slice(0, 30));
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");

  const userPage = 10;
  const pageVisited = pageNumber * userPage;

  const filteredUsers = users.filter((user) =>
    user.user_name.toLowerCase().includes(userInput)
  );

  const pageCount = Math.ceil(users.length / userPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const displayUsers =
    filteredUsers.length === 0 ? (
      <NonRegisterUser>
        <Text type={fonts.Medium} textSize={1.2}>
          등록된 소환사가 없습니다..
        </Text>
        <Emozi
          src="https://i.namu.wiki/i/7qHC29f5HWglaVxnPFqmPrSA1PzRIOwPeCTvLGopOW16s9PIJ2LK0VecwHZY7tkMxWD4I7jxQuDJL0KM3kzlhg.webp"
          alt="bluemon"
        />
      </NonRegisterUser>
    ) : (
      filteredUsers
        .slice(pageVisited, pageVisited + userPage)
        .map((user) => (
          <div key={user.id}>
            {user.id <= 3 ? <TopRank user={[user]} /> : <Rank user={[user]} />}
          </div>
        ))
    );

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value.toLowerCase());
  };

  return (
    <S.Wrapper>
      <S.CenterWrapper>
        <S.RankingWrapper>
          <S.GameTogetherWrapper>
            <S.GameRankTitle>교내랭킹</S.GameRankTitle>
            <S.SearchInputWrapper>
              <S.SearchInput
                type="text"
                placeholder="소환사 검색"
                onChange={getValue}
              />
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

const StyledPagination = styled(ReactPaginate)`
  display: flex;
  gap: 2rem;
  cursor: pointer;
`;

const NonRegisterUser = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Emozi = styled.img`
  width: 4rem;
  height: 4rem;
`;

export default SchoolRank;
