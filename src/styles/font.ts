const FontGenerator = (weight: number) => `
    font-family: ${
      weight === 400
        ? "PredtendardMedium"
        : weight === 700
        ? "PretendardBold"
        : "PretendardExtraBold"
    };
`;

export const fonts = {
  Medium: FontGenerator(400),
  Bold: FontGenerator(700),
  ExtraBold: FontGenerator(800),
};
