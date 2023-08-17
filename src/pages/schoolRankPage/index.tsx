import * as S from "./style";
import SearchIcon from "../../components/svg/searchIcon700";
import { dummy } from "../../dummy/userRank.dummy";
import { useState } from "react";

const SchoolRank = () => {
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
            <S.RankNumber>#</S.RankNumber>
            <S.UserName>소환사</S.UserName>
            <S.Tier>티어</S.Tier>
            <S.Lp>LP</S.Lp>
            <S.MostChampion>모스트챔피언</S.MostChampion>
            <S.Level>레벨</S.Level>
            <S.Win>승률</S.Win>
          </S.RankNav>
        </S.RankingWrapper>
        <S.UserTable>
          {dummy.map((data, index) => (
            <S.UserWrapper key={index}>
              <S.RankNumber>{data.id}</S.RankNumber>
              <S.UserName>{data.user_name}</S.UserName>
              <S.Tier>{data.tier}</S.Tier>
              <S.Lp>{data.lp} LP</S.Lp>
              <S.MostChampion>
                <S.Img src={data.most_one} alt="1" />
                <S.Img src={data.most_two} alt="2" />
                <S.Img src={data.most_three} alt="3" />
              </S.MostChampion>
              <S.Level>{data.level}</S.Level>
              <S.Win2>{data.win} %</S.Win2>
            </S.UserWrapper>
          ))}
        </S.UserTable>
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
