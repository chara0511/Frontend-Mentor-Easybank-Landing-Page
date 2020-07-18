import React from "react";
import {
  BgIntroDesktop,
  BgIntroMobile,
  IconApi,
  IconBudgeting,
  IconClose,
  IconFacebook,
  IconHamburger,
  IconInstagram,
  IconOnBoarding,
  IconOnline,
  IconPinterest,
  IconTwitter,
  IconYoutube,
  Logo,
} from "../icons";

const FormattedIcons = ({ name }) => {
  switch (name) {
    case "BgIntroDesktop":
      return <BgIntroDesktop />;

    case "BgIntroMobile":
      return <BgIntroMobile />;

    case "IconApi":
      return <IconApi />;

    case "IconBudgeting":
      return <IconBudgeting />;

    case "IconClose":
      return <IconClose />;

    case "IconFacebook":
      return <IconFacebook />;

    case "IconHamburger":
      return <IconHamburger />;

    case "IconInstagram":
      return <IconInstagram />;

    case "IconOnBoarding":
      return <IconOnBoarding />;

    case "IconOnline":
      return <IconOnline />;

    case "IconPinterest":
      return <IconPinterest />;

    case "IconTwitter":
      return <IconTwitter />;

    case "IconYoutube":
      return <IconYoutube />;

    case "Logo":
      return <Logo name={name} />;

    default:
      return null;
  }
};

export default FormattedIcons;
