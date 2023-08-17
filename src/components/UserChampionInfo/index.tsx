import { styled } from "styled-components";
import * as C from "..";
import * as T from "../../styles/theme";
import UserIcon from "../jpg/userIcon";

const UserChampionInfo = () => {
  return (
    <Container>
      <C.Flex gap={0.5}>
        <UserIcon
          width={2.125}
          height={2.125}
          borderRadius={99}
          imgLink="assets/champion_portrait/Aatrox.webp"
        />
        <C.Flex direction="column" gap={0.3}>
          <C.Text textSize={0.85} color={T.gray[700]}>
            아트록스
          </C.Text>
          <C.Text textSize={0.4} color={T.gray[600]}>
            CS 192.5(0.1)
          </C.Text>
        </C.Flex>
      </C.Flex>
      <C.Flex direction="column" gap={0.3}>
        <C.Text textSize={0.85} color={T.blue[500]}>
          3.75:1 평점
        </C.Text>
        <C.Text textSize={0.4} color={T.gray[500]}>
          12.1 / 6.3 / 2.8
        </C.Text>
      </C.Flex>
      <C.Flex direction="column" alignItems="right" gap={0.33}>
        <C.Text textSize={0.85} color={T.blue[500]} textAlign="right">
          56%
        </C.Text>
        <C.Text textSize={0.4} color={T.gray[600]}>
          128게임
        </C.Text>
      </C.Flex>
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
