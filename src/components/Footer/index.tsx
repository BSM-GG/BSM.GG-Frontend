import * as S from "./style";
import BSMLogo from "../svg/mainLogo";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.AutoWrapper>
        <S.FooterLogoWrapper>
          <BSMLogo />
        </S.FooterLogoWrapper>
        <S.FooterQNAWrapper>
          <S.FooterQNAList>
            <S.QNA>공지사항</S.QNA>
            <S.QNA>문의하기</S.QNA>
            <S.QNA>개인정보처리방침</S.QNA>
            <S.QNA>이용약관</S.QNA>
            <S.QNA>QNA</S.QNA>
            <S.QNA>FAQ</S.QNA>
          </S.FooterQNAList>
        </S.FooterQNAWrapper>
        <S.FooterInformation>
          <S.FooterInformationList>
            E-mail: 2022046@bssm.hs.kr
          </S.FooterInformationList>
          <S.FooterInformationList>
            공동대표: 김준경, 이상진, 강웅빈
          </S.FooterInformationList>
          <S.FooterInformationList>
            위치: 부산광역시 강서구 가락대로 1393
          </S.FooterInformationList>
        </S.FooterInformation>
      </S.AutoWrapper>
    </S.FooterWrapper>
  );
};

export default Footer;
