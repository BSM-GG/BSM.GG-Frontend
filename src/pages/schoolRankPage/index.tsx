import * as S from "./style";
import SearchIcon from "../../components/svg/searchIcon700";
import { useState } from "react";
import TopRank from "./TopRankUser";
import { userData_dummy } from "../../dummy/userRank.dummy";

const SchoolRank = () => {
  const filledData = userData_dummy.slice(0, 3);

  console.log(filledData);

  const [startPage, setStartPage] = useState(1);

  const onClickPrevPage = () => {
    if (startPage < 5) return;
    setStartPage((prev) => prev - 5);
  };

  const onClickNextPage = () => {
    if (startPage + 5 > 100) return;
    setStartPage((prev) => prev + 5);
  };

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
        <S.UserWrapper>
          <TopRank filledData={[...filledData]} />
        </S.UserWrapper>
        <S.Nav>
          <S.NumberNav>
            <S.ArrowNav onClick={onClickPrevPage}> {"<"} </S.ArrowNav>
            {Array(5)
              .fill(1)
              .map((el, index) => (
                <S.Number
                  id={String(index + startPage)}
                  key={index + startPage}
                  onClick={() => {
                    console.log(index + startPage);
                  }}
                >
                  {index + startPage}
                </S.Number>
              ))}

            <S.ArrowNav onClick={onClickNextPage}> {">"} </S.ArrowNav>
          </S.NumberNav>
        </S.Nav>
      </S.CenterWrapper>
    </S.Wrapper>
  );
};

export default SchoolRank;
