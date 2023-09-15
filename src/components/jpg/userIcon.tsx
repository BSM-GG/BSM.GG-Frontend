import JPGAttributeProps from "types/JPGAttributeProps.type";
import { styled } from "styled-components";

const UserIcon = styled.div<JPGAttributeProps>`
  width: ${(props) => props.width || "9"}rem;
  height: ${(props) => props.height || "9"}rem;

  border: none;
  border-radius: ${(props) => props.borderRadius || "10"}px;

  background-color: ${(props) => props.bgColor || "none"};
  background-image: url(${(props) => props.imgLink});
  background-size: ${(props) => props.imgSize || "100%"};
  background-position: ${(props) => props.imgPosition ?? "center"};
  background-repeat: no-repeat;
`;

export default UserIcon;
