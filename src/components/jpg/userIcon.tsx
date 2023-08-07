import JPGAttributeProps from "../../types/JPGAttributeProps.type";
import { styled } from "styled-components";

const UserIcon = ({
  width = 9,
  height = 9,
  bgColor = "white",
  borderRadius = 10,
  imgLink = "https://mblogthumb-phinf.pstatic.net/MjAxODA1MTdfMjEy/MDAxNTI2NTQ3NTYzMDI0.bbA7IVTT_T9sN7-TO-UCiJ9ZRJtlpdEwP-0sjvdqmkwg.rxZ3WIycXzknUNEHwwh4h6riykM6I6KT1IZItaDePrEg.PNG.heekyun93/04c66e50b1888117.png?type=w800",
}: JPGAttributeProps) => {
  return <ImgContainer size={{ width, height, borderRadius, imgLink }} />;
};

export default UserIcon;

const ImgContainer = styled.div<{ size: JPGAttributeProps }>`
  width: ${(props) => props.size.width}rem;
  height: ${(props) => props.size.height}rem;

  border: none;
  border-radius: ${(props) => props.size.borderRadius}px;

  background-image: url(${(props) => props.size.imgLink});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
