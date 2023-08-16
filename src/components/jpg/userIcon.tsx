import JPGAttributeProps from "../../types/JPGAttributeProps.type";
import { styled } from "styled-components";

const UserIcon = styled.div<JPGAttributeProps>`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;

  border: none;
  border-radius: ${(props) => props.borderRadius}px;

  background-color: ${(props) => props.bgColor};
  background-image: url(${(props) => props.imgLink});
  background-size: ${(props) => props.imgSize};
  background-position: center;
  background-repeat: no-repeat;
`;

export default UserIcon;
