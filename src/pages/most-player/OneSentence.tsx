import * as T from "styles/theme";
import { styled } from "styled-components";
import { Text } from "components/common";
import { fonts } from "styles/font";

const OneSentence = () => {
  return (
    <SentenceWrapper>
      한줄평
      <OneSentenceWrapper>
        <Text textSize={1.2} color={"black"} type={fonts.Regular}>
          롤 할 시간에 운동해서 살을 빼는것은 어떨까요?
        </Text>
      </OneSentenceWrapper>
    </SentenceWrapper>
  );
};

export default OneSentence;

const SentenceWrapper = styled.div`
  width: 100%;
  height: 7rem;
  margin-top: 4.3rem;
`;

const OneSentenceWrapper = styled.div`
  width: 100%;
  height: 4.5rem;
  background-color: ${T.red[100]};
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.8rem;
`;
