import { css } from "styled-components";

import PublicSansTTFBlack from "../fonts/PublicSans/PublicSans-Black.ttf";
import PublicSansBlackItalic from "../fonts/PublicSans/PublicSans-BlackItalic.ttf";
import PublicSansBoldTTF from "../fonts/PublicSans/PublicSans-Bold.ttf";
import PublicSansBoldWOFF from "../fonts/PublicSans/PublicSans-Bold.woff";
import PublicSansBoldWOFF2 from "../fonts/PublicSans/PublicSans-Bold.woff2";
import PublicSansBoldItalic from "../fonts/PublicSans/PublicSans-BoldItalic.ttf";
import PublicSansExtraBold from "../fonts/PublicSans/PublicSans-ExtraBold.ttf";
import PublicSansExtraBoldItalic from "../fonts/PublicSans/PublicSans-ExtraBoldItalic.ttf";
import PublicSansExtraLight from "../fonts/PublicSans/PublicSans-ExtraLight.ttf";
import PublicSansExtraLightItalic from "../fonts/PublicSans/PublicSans-ExtraLightItalic.ttf";
import PublicSansItalic from "../fonts/PublicSans/PublicSans-Italic.ttf";
import PublicSansLightTTF from "../fonts/PublicSans/PublicSans-Light.ttf";
import PublicSansLightWOFF from "../fonts/PublicSans/PublicSans-Light.woff";
import PublicSansLightWOFF2 from "../fonts/PublicSans/PublicSans-Light.woff2";
import PublicSansLightItalic from "../fonts/PublicSans/PublicSans-LightItalic.ttf";
import PublicSansMedium from "../fonts/PublicSans/PublicSans-Medium.ttf";
import PublicSansMediumItalic from "../fonts/PublicSans/PublicSans-MediumItalic.ttf";
import PublicSansRegularTTF from "../fonts/PublicSans/PublicSans-Regular.ttf";
import PublicSansRegularWOFF from "../fonts/PublicSans/PublicSans-Regular.woff";
import PublicSansRegularWOFF2 from "../fonts/PublicSans/PublicSans-Regular.woff2";
import PublicSansSemiBold from "../fonts/PublicSans/PublicSans-SemiBold.ttf";
import PublicSansSemiBoldItalic from "../fonts/PublicSans/PublicSans-SemiBoldItalic.ttf";
import PublicSansThin from "../fonts/PublicSans/PublicSans-Thin.ttf";
import PublicSansThinItalic from "../fonts/PublicSans/PublicSans-ThinItalic.ttf";

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
