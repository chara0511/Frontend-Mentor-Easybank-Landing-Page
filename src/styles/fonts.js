import { css } from "styled-components";

import PublicSansBoldTTF from "../fonts/PublicSans/PublicSans-Bold.ttf";
import PublicSansBoldWOFF from "../fonts/PublicSans/PublicSans-Bold.woff";
import PublicSansBoldWOFF2 from "../fonts/PublicSans/PublicSans-Bold.woff2";
import PublicSansLightTTF from "../fonts/PublicSans/PublicSans-Light.ttf";
import PublicSansLightWOFF from "../fonts/PublicSans/PublicSans-Light.woff";
import PublicSansLightWOFF2 from "../fonts/PublicSans/PublicSans-Light.woff2";
import PublicSansRegularTTF from "../fonts/PublicSans/PublicSans-Regular.ttf";
import PublicSansRegularWOFF from "../fonts/PublicSans/PublicSans-Regular.woff";
import PublicSansRegularWOFF2 from "../fonts/PublicSans/PublicSans-Regular.woff2";

const FontFaces = css`
  @font-face {
    font-family: "Public Sans";
    src: url(${PublicSansLightWOFF2}) format("woff2"),
      url(${PublicSansLightWOFF}) format("woff"),
      url(${PublicSansLightTTF}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: "Public Sans";
    src: url(${PublicSansRegularWOFF2}) format("woff2"),
      url(${PublicSansRegularWOFF}) format("woff"),
      url(${PublicSansRegularTTF}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Public Sans";
    src: url(${PublicSansBoldWOFF2}) format("woff2"),
      url(${PublicSansBoldWOFF}) format("woff"),
      url(${PublicSansBoldTTF}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }
`;

export default FontFaces;
