import * as S from "./style";
import SearchIcon from "../../components/svg/searchIcon700";
import { dummy } from "../../dummy/userRank.dummy";

const SchoolRank = () => {
  return (
    <>
      <S.Wrapper>
        <S.CenterWrapper>
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
        </S.CenterWrapper>
      </S.Wrapper>
      <S.Nav>sdf</S.Nav>
    </>
  );
};

export default SchoolRank;
