import styled from "styled-components";
import * as colors from "../../styles/theme";

export const FooterWrapper = styled.div`
  width: 100vw;
  height: 15rem;
  background-color: ${colors.gray[100]};

  display: flex;
  justify-content: center;

  margin-top: 13.5rem;
`;

export const AutoWrapper = styled.div`
  width: 80%;
  height: 100%;
`;

export const FooterLogoWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
`;

export const FooterLogo = styled.img``;

export const FooterQNAWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid ${colors.gray[600]};
`;

export const FooterQNAList = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: end;
  gap: 1rem;
  margin-bottom: 0.75rem;
`;

export const QNA = styled.div`
  color: ${colors.gray[600]};
  margin-bottom: 0.5rem;
`;

export const FooterInformation = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

export const FooterInformationList = styled.div`
  color: ${colors.gray[600]};
`;
