import styled from "styled-components";
import * as T from "../../styles/theme";
import { Flex, Text } from "../common";
import { fonts } from "../../styles/font";
import UserIcon from "../jpg/userIcon";

const InGameInformation = () => {
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
              imgLink="https://i.namu.wiki/i/r-Gvk6fvQkseAAJeExzZEa64zh5Q8zD7CA-97mhNNq1y-Q0AbBE04nwowv5raJ3zZcoyLBvDxbrpPZf6EiEgYw.webp"
            />
            <UserIcon
              width={1.7}
              height={1.7}
              borderRadius={5}
              imgLink="https://i.namu.wiki/i/RbsKn8EdID5emXA-sOPJnYMY9JEsXQQ9MRMBBp-V5oVhWEOYORAqhk-1hfqEX9T7zSHj785d3SK8H7fgF7jfKw.webp"
            />
          </Flex>
          <Flex direction="column" gap={0.25}>
            <UserIcon
              width={1.7}
              height={1.7}
              imgSize="110%"
              borderRadius={5}
              imgLink="https://i.namu.wiki/i/fCEPJxFsbeApqrKcOytGSfHscsihhok9e7Dk_-I628_I0vdWaFyWOMEqor_2BGm1DgJPg8zHfrcbu31FBMPj3A.webp"
            />
            <UserIcon
              width={1.7}
              height={1.7}
              imgSize="80%"
              borderRadius={5}
              imgLink="https://i.namu.wiki/i/Y7xPqPJVXX-U2QPMTz3ORxTzT_F0_gm7PWb1SgtNFjKaJZ22jh5nG_Q0HKHf9fQtdysfPtC449OvpEpBFKP-jQ.webp"
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
            imgLink="https://i.namu.wiki/i/PMLxOKYy9Or5o2j27fgq_LoKEoi1pFUw5SmY94SO0q1BRnAQ533mEJerdpDSg7oNVNuV_yU0yf_3ho6thaVWBw.webp"
          ></UserIcon>
        ))}
        <UserIcon
          width={2}
          height={2}
          borderRadius={99}
          imgLink="https://i.namu.wiki/i/5Iu7kqgiXsQd-nqIWpSrY3l-W_eUACY5Nb-o2S9otBqBVuD9kBHNxy6r6FWMK3-5HLZ3WxPa0m98aczjd57BMw.webp"
        ></UserIcon>
      </UsedItems>
    </Container>
  );
};

export default InGameInformation;

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
