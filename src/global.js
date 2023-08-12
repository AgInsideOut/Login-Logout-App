import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-roboto: Roboto;
--link: 'Open Sans';

/* font sizes */
--link-size: 16px;
--body-small-size: 14px;

/* Colors */
--white: #fff;
--black: #000;
--color-gainsboro: #d9d9d9;
--dark-gray: #707070;

/* Gaps */
--gap-5xl: 24px;

/* Paddings */
--padding-5xl: 24px;
--padding-base: 16px;
--padding-9xs: 4px;

/* border radiuses */
--br-8xs: 5px;
--br-5xs: 8px;
--br-xl: 20px;
--br-9xs: 4px;

}
`;
