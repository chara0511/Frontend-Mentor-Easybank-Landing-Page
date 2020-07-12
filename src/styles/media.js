import { css } from "styled-components";

const sizes = {
  lgDesktop: 1440,
  mdDesktop: 1200,
  smDesktop: 1000,
  lgTablet: 768,
  mdTablet: 600,
  lgPhone: 480,
  smPhone: 374,
  xsPhone: 330,
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

export default media;
