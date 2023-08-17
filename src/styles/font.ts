const FontGenerator = (weight: number) => `
    font-family: ${
      weight === 500
        ? "PretendardRegular"
        : weight === 600
        ? "PretendardMedium"
        : weight === 700
        ? "PretendardBold"
        : "PretendardExtraBold"
    };
`;

export const fonts = {
  Regular: FontGenerator(500),
  Medium: FontGenerator(600),
  Bold: FontGenerator(700),
  ExtraBold: FontGenerator(800),
};
