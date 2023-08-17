import styled from "styled-components";
import * as C from "../index";
import * as T from "../../styles/theme";
import { fonts } from "../../styles/font";

const InGameInformation = () => {
  return (
    <Container>
      <C.Flex gap={0.3} direction="column">
        <C.Text type={fonts.Regular} color={T.red[400]} textSize={0.8}>
          킬관여 70%
        </C.Text>
        <C.Flex direction="column">
          <C.Text type={fonts.Regular} textSize={0.8}>
            제어 와드 4
          </C.Text>
          <C.Text type={fonts.Regular} textSize={0.8}>
            CS 152
          </C.Text>
        </C.Flex>
      </C.Flex>
      <C.Text type={fonts.Regular}>Grandmaster</C.Text>
    </Container>
  );
};

export default InGameInformation;

const Container = styled.div`
  width: fit-content;
  height: 100%;

  display: flex;
  gap: 2.5rem;
  flex-direction: column;
  justify-content: space-between;
`;
