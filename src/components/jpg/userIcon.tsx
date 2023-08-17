import JPGAttributeProps from "../../types/JPGAttributeProps.type";
import { styled } from "styled-components";

const UserIcon = styled.div<JPGAttributeProps>`
  width: ${(props) => props.width ?? "9"}rem;
  height: ${(props) => props.height ?? "9"}rem;

  border: none;
  border-radius: ${(props) => props.BorderRadius ?? "10"}px;

  background-color: ${(props) => props.BgColor ?? "none"};
  background-image: url(${(props) => props.ImgLink});
  background-size: ${(props) => props.ImgSize ?? "100%"};
  background-position: ${(props) => props.ImgPosition ?? "center"};
  background-repeat: no-repeat;
`;

export default UserIcon;
