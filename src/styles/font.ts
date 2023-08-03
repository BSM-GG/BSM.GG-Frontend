const FontGenerator = (weight: number) => `
    font-family: ${
      weight === 500
        ? "PretendardRegular"
        : weight === 700
        ? "PretendardBold"
        : "PretendardExtraBold"
    };
`;

export const fonts = {
  Regular: FontGenerator(500),
  Bold: FontGenerator(700),
  ExtraBold: FontGenerator(800),
};
