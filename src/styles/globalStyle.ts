import { createGlobalStyle } from "styled-components";
import PretendardMedium from "../fonts/Pretendard-Medium.ttf";
import PretendardBold from "../fonts/Pretendard-Bold.ttf";
import PretendardExtraBold from "../fonts/Pretendard-ExtraBold.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'PretendardMedium';
  src: local('Pretendard-Medium'), local('Pretendard-Medium');
  font-style: normal;
  src: url(${PretendardMedium}) format('truetype');
}

@font-face {
  font-family: 'PretendardBold';
  src: local('Pretendard-Bold'), local('Pretendard-Bold');
  font-style: normal;
  src: url(${PretendardBold}) format('truetype');
}

@font-face {
  font-family: 'PretendardExtraBold';
  src: local('Pretendard-ExtraBold'), local('Pretendard-ExtraBold');
  font-style: normal;
  src: url(${PretendardExtraBold}) format('truetype');
}

* {
  margin: 0;
}

input {
  border: none;
	outline: none;
}
`;

export default GlobalStyle;
