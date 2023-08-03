import { createGlobalStyle } from "styled-components";
import PretendardRegular from "../fonts/Pretendard-Regular.ttf";
import PretendardBold from "../fonts/Pretendard-Bold.ttf";
import PretendardExtraBold from "../fonts/Pretendard-ExtraBold.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'PretendardRegular';
  src: local('PretendardRegular'), local('PretendardRegular');
  font-style: normal;
  src: url(${PretendardRegular}) format('truetype');
}

@font-face {
  font-family: 'PretendardBold';
  src: local('PretendardBold'), local('PretendardBold');
  font-style: normal;
  src: url(${PretendardBold}) format('truetype');
}

@font-face {
  font-family: 'PretendardExtraBold';
  src: local('PretendardExtraBold'), local('PretendardExtraBold');
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
