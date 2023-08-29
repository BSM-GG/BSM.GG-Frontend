import styled, { keyframes } from "styled-components";
import * as T from "../../styles/theme";
import { Flex, Text } from "../common";
import { fonts } from "../../styles/font";
import UserIcon from "../jpg/userIcon";

const DetailedGameInformation = (props: { show: boolean }) => {
  return (
    <>
      {props.show && (
        <Container>
          <TeamContainer>
            {Array.from({ length: 5 }).map(() => (
              <GamePlayerInfo>
                <PlayerInfoContainer>
                  <Flex gap={0.75} alignItems="center">
                    <ChampionIcon
                      width={2.5}
                      height={2.5}
                      borderRadius={99}
                      imgLink="assets/champion_portrait/Aatrox.webp"
                      level="11"
                    />
                    <Flex>
                      <Flex direction="column" gap={0.15} alignItems="flex-end">
                        <UserIcon
                          width={1}
                          height={1}
                          borderRadius={3}
                          imgLink="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_64&v=1692943905742"
                        />
                        <UserIcon
                          width={1}
                          height={1}
                          borderRadius={3}
                          imgLink="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_64&v=1692943905742"
                        />
                      </Flex>
                      <Flex direction="column" gap={0.15}>
                        <UserIcon
                          width={1}
                          height={1}
                          imgSize="110%"
                          borderRadius={3}
                          imgLink="https://i.namu.wiki/i/fCEPJxFsbeApqrKcOytGSfHscsihhok9e7Dk_-I628_I0vdWaFyWOMEqor_2BGm1DgJPg8zHfrcbu31FBMPj3A.webp"
                        />
                        <UserIcon
                          width={1}
                          height={1}
                          imgSize="80%"
                          borderRadius={3}
                          imgLink="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_64&v=1692943905742"
                        />
                      </Flex>
                    </Flex>
                    <PlayerNameContainer>
                      <Text type={fonts.Regular} textSize={0.8}>
                        상진콧구멍십팔센
                      </Text>
                      <Text
                        type={fonts.Regular}
                        textSize={0.8}
                        color={T.gray[600]}
                      >
                        Emerald 3
                      </Text>
                    </PlayerNameContainer>
                  </Flex>
                </PlayerInfoContainer>
                <Flex direction="column" alignItems="center" gap={0.25}>
                  <Flex>
                    <Text type={fonts.Medium} textSize={0.8}>
                      12 /&nbsp;
                    </Text>
                    <Text type={fonts.Medium} textSize={0.8} color="red">
                      4
                    </Text>
                    <Text type={fonts.Medium} textSize={0.8}>
                      &nbsp;/ 15
                    </Text>
                    <Text
                      type={fonts.Medium}
                      textSize={0.8}
                      color={T.gray[600]}
                    >
                      &nbsp;(67%)
                    </Text>
                  </Flex>
                  <Text type={fonts.Medium} textSize={0.8} color={T.blue[600]}>
                    6.75 평점
                  </Text>
                </Flex>
                <Text type={fonts.Regular} textSize={0.9} color={T.red[100]}>
                  딜량 19400
                </Text>
                <Text type={fonts.Regular} textSize={0.9} color={T.gray[700]}>
                  핑와 5 / 와드 12
                </Text>
                <UsedItems>
                  {Array.from({ length: 6 }).map(() => (
                    <UserIcon
                      width={1.5}
                      height={1.5}
                      borderRadius={3}
                      imgLink="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_64&v=1692943905742"
                    ></UserIcon>
                  ))}
                  <UserIcon
                    width={1.5}
                    height={1.5}
                    borderRadius={99}
                    imgLink="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_64&v=1692943905742"
                  ></UserIcon>
                </UsedItems>
              </GamePlayerInfo>
            ))}
          </TeamContainer>
          <TeamContainer>
            {Array.from({ length: 5 }).map(() => (
              <GamePlayerInfo>
                <PlayerInfoContainer>
                  <Flex gap={0.75} alignItems="center">
                    <ChampionIcon
                      width={2.5}
                      height={2.5}
                      borderRadius={99}
                      imgLink="assets/champion_portrait/Aatrox.webp"
                      level="11"
                    />
                    <Flex>
                      <Flex direction="column" gap={0.15} alignItems="flex-end">
                        <UserIcon
                          width={1}
                          height={1}
                          borderRadius={3}
                          imgLink="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_64&v=1692943905742"
                        />
                        <UserIcon
                          width={1}
                          height={1}
                          borderRadius={3}
                          imgLink="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_64&v=1692943905742"
                        />
                      </Flex>
                      <Flex direction="column" gap={0.15}>
                        <UserIcon
                          width={1}
                          height={1}
                          imgSize="110%"
                          borderRadius={3}
                          imgLink="https://i.namu.wiki/i/fCEPJxFsbeApqrKcOytGSfHscsihhok9e7Dk_-I628_I0vdWaFyWOMEqor_2BGm1DgJPg8zHfrcbu31FBMPj3A.webp"
                        />
                        <UserIcon
                          width={1}
                          height={1}
                          imgSize="80%"
                          borderRadius={3}
                          imgLink="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_64&v=1692943905742"
                        />
                      </Flex>
                    </Flex>
                    <PlayerNameContainer>
                      <Text type={fonts.Regular} textSize={0.8}>
                        상진콧구멍십팔센
                      </Text>
                      <Text
                        type={fonts.Regular}
                        textSize={0.8}
                        color={T.gray[600]}
                      >
                        Emerald 3
                      </Text>
                    </PlayerNameContainer>
                  </Flex>
                </PlayerInfoContainer>
                <Flex direction="column" alignItems="center" gap={0.25}>
                  <Flex>
                    <Text type={fonts.Medium} textSize={0.8}>
                      12 /&nbsp;
                    </Text>
                    <Text type={fonts.Medium} textSize={0.8} color="red">
                      4
                    </Text>
                    <Text type={fonts.Medium} textSize={0.8}>
                      &nbsp;/ 15
                    </Text>
                    <Text
                      type={fonts.Medium}
                      textSize={0.8}
                      color={T.gray[600]}
                    >
                      &nbsp;(67%)
                    </Text>
                  </Flex>
                  <Text type={fonts.Medium} textSize={0.8} color={T.blue[600]}>
                    6.75 평점
                  </Text>
                </Flex>
                <Text type={fonts.Regular} textSize={0.9} color={T.red[100]}>
                  딜량 19400
                </Text>
                <Text type={fonts.Regular} textSize={0.9} color={T.gray[700]}>
                  핑와 5 / 와드 12
                </Text>
                <UsedItems>
                  {Array.from({ length: 6 }).map(() => (
                    <UserIcon
                      width={1.5}
                      height={1.5}
                      borderRadius={3}
                      imgLink="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_64&v=1692943905742"
                    ></UserIcon>
                  ))}
                  <UserIcon
                    width={1.5}
                    height={1.5}
                    borderRadius={99}
                    imgLink="https://opgg-static.akamaized.net/meta/images/lol/spell/SummonerHaste.png?image=q_auto,f_webp,w_64&v=1692943905742"
                  ></UserIcon>
                </UsedItems>
              </GamePlayerInfo>
            ))}
          </TeamContainer>
        </Container>
      )}
    </>
  );
};

export default DetailedGameInformation;

const Container = styled.div`
  position: absolute;
  background-color: ${T.blue[200]};
  width: 59rem;
  height: 32rem;

  top: 12rem;

  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 0.5rem 2rem;
  box-sizing: border-box;

  z-index: 1;
  overflow: hidden;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GamePlayerInfo = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.25rem;
`;

const PlayerInfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ChampionIcon = styled(UserIcon)<{ level: string }>`
  position: relative;

  &::after {
    content: "${(props) => props.level}";
    width: 1rem;
    height: 1rem;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    ${fonts.Regular}
    font-size: 0.6rem;
    color: white;
    border-radius: 99px;
    background-color: ${T.gray[700]};
    bottom: 0;
    left: 0;
  }
`;

const PlayerNameContainer = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const UsedItems = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  justify-content: space-evenly;
  gap: 0.15rem;
`;
