import styled from "styled-components";
import * as C from "../index";
import * as T from "../../styles/theme";
import { fonts } from "../../styles/font";
import UserIcon from "../jpg/userIcon";

const DetailedInGameInformation = () => {
  return (
    <Container>
      <C.Flex gap={0.5}>
        <ChampionIcon
          width={4.5}
          height={4.5}
          borderRadius={99}
          imgLink="assets/champion_portrait/Aatrox.webp"
          level="11"
        />
        <C.Flex gap={0.1}>
          <C.Flex direction="column" gap={0.25} alignItems="flex-end">
            <UserIcon
              width={1.7}
              height={1.7}
              borderRadius={5}
              imgLink="https://i.namu.wiki/i/Jp0erj9KNWJoLm0XJAtbje-is_eG9L3zrisu75CJJnwl3vvyo_uPNe_dtO9CWmKYmsoLa8qDSbjRbtdqyATiqw.webp"
            />
            <UserIcon
              width={1.7}
              height={1.7}
              borderRadius={5}
              imgLink="https://i.namu.wiki/i/nrCKZrvop6MBRIXq8sbhYx_LlUYGrNFcg1bnWKcJoHzqXnhk3vOXTcI25i-LDu8CItZeIuqGE-bsET4wPVC4jw.webp"
            />
          </C.Flex>
          <C.Flex direction="column" gap={0.25}>
            <UserIcon
              width={1.7}
              height={1.7}
              imgSize="110%"
              imgLink="https://i.namu.wiki/i/fCEPJxFsbeApqrKcOytGSfHscsihhok9e7Dk_-I628_I0vdWaFyWOMEqor_2BGm1DgJPg8zHfrcbu31FBMPj3A.webp"
            />
            <UserIcon
              width={1.7}
              height={1.7}
              imgSize="80%"
              imgLink="https://i.namu.wiki/i/1QegZsPLVKQJMe041Om3LmwTs9JvZn0cOhlxsbugap0zPMliwmCuBnYEHOmDc-rd6XBkF4h75wkD1akwbEHgMw.webp"
            />
          </C.Flex>
          <C.Flex direction="column" gap={0.75}>
            <C.Flex>
              <C.Text type={fonts.Regular} textSize={1.15}>
                12 /&nbsp;
              </C.Text>
              <C.Text type={fonts.Regular} textSize={1.15} color="red">
                4
              </C.Text>
              <C.Text type={fonts.Regular} textSize={1.15}>
                &nbsp;/ 15
              </C.Text>
            </C.Flex>
            <C.Text type={fonts.Regular} color={T.blue[600]}>
              6.75:1 평점
            </C.Text>
          </C.Flex>
        </C.Flex>
      </C.Flex>
    </Container>
  );
};

export default DetailedInGameInformation;

const Container = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
`;

const ChampionIcon = styled(UserIcon)<{ level: string }>`
  position: relative;

  &::after {
    content: "${(props) => props.level}";
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    ${fonts.Regular}
    font-size: 0.7rem;
    color: white;
    border-radius: 99px;
    background-color: ${T.gray[700]};
    bottom: 0;
    right: 0;
  }
`;
