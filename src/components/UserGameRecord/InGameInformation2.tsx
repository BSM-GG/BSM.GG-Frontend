import styled from "styled-components";
import * as T from "../../styles/theme";
import { Flex, Text } from "../common";
import { fonts } from "../../styles/font";
import UserIcon from "../jpg/userIcon";

const DetailedInGameInformation = () => {
  return (
    <Container>
      <Flex gap={0.5} alignItems="center">
        <ChampionIcon
          width={4.5}
          height={4.5}
          borderRadius={99}
          imgLink="assets/champion_portrait/Aatrox.webp"
          level="11"
        />
        <Flex gap={0.25}>
          <Flex direction="column" gap={0.25} alignItems="flex-end">
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
          </Flex>
          <Flex direction="column" gap={0.25}>
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
          </Flex>
        </Flex>
        <Flex direction="column" gap={0.25}>
          <Flex>
            <Text type={fonts.Medium} textSize={1.15}>
              12 /&nbsp;
            </Text>
            <Text type={fonts.Medium} textSize={1.15} color="red">
              4
            </Text>
            <Text type={fonts.Medium} textSize={1.15}>
              &nbsp;/ 15
            </Text>
          </Flex>
          <Text type={fonts.Medium} color={T.blue[600]}>
            6.75 평점
          </Text>
        </Flex>
      </Flex>
      <UsedItems>
        {Array.from({ length: 6 }).map(() => (
          <UserIcon
            width={2}
            height={2}
            borderRadius={5}
            imgLink="https://i.namu.wiki/i/cStlYnx6tTh49-TU175K-Lx027ag4Egwd2WBA7BueUYWREI9jfJikusFkg2jJObH0hhkgzcuE07MSpNDeWY9hA.webp"
          ></UserIcon>
        ))}
        <UserIcon
          width={2}
          height={2}
          borderRadius={99}
          imgLink="https://i.namu.wiki/i/ZU992-y_DoiTppYdw14hvzxWukYh1v9L0VCyenEYt61Du2kHWAu8of6m1xjZ41A-UOywZ7o3zMYLdl6Yeu9u_w.webp"
        ></UserIcon>
      </UsedItems>
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
    font-size: 0.8rem;
    color: white;
    border-radius: 99px;
    background-color: ${T.gray[700]};
    bottom: 0;
    right: 0;
  }
`;

const UsedItems = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: space-evenly;
  gap: 0.3rem;
`;
