import { styled } from "styled-components";
import * as T from "styles/theme";
import UserIcon from "../jpg/userIcon";
import { Flex, Text } from "components/common";

const UserChampionInfo = () => {
  return (
    <Container>
      <Flex gap={0.5}>
        <UserIcon
          width={2.125}
          height={2.125}
          borderRadius={99}
          imgLink="assets/champion_portrait/Aatrox.webp"
        />
        <Flex direction="column" gap={0.3}>
          <Text textSize={0.85} color={T.gray[700]}>
            아트록스
          </Text>
          <Text textSize={0.4} color={T.gray[600]}>
            CS 192.5(0.1)
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" gap={0.3}>
        <Text textSize={0.85} color={T.blue[500]}>
          3.75:1 평점
        </Text>
        <Text textSize={0.4} color={T.gray[500]}>
          12.1 / 6.3 / 2.8
        </Text>
      </Flex>
      <Flex direction="column" alignItems="right" gap={0.33}>
        <Text textSize={0.85} color={T.blue[500]} textAlign="right">
          56%
        </Text>
        <Text textSize={0.4} color={T.gray[600]}>
          128게임
        </Text>
      </Flex>
    </Container>
  );
};

export default UserChampionInfo;

const Container = styled.div`
  width: 23rem;
  height: 2.125rem;

  display: flex;
  justify-content: space-between;
`;
