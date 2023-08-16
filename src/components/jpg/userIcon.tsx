import JPGAttributeProps from "../../types/JPGAttributeProps.type";
import { styled } from "styled-components";

const UserIcon = styled.div<JPGAttributeProps>`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;

  border: none;
  border-radius: ${(props) => props.BorderRadius}px;

  background-color: ${(props) => props.BgColor};
  background-image: url(${(props) => props.ImgLink});
  background-size: ${(props) => props.ImgSize};
  background-position: center;
  background-repeat: no-repeat;
`;

export default UserIcon;
