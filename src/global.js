import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--body: 'Open Sans';
--font-roboto: Roboto;

/* font sizes */
--body-size: 16px;
--body-small-size: 14px;

/* Colors */
--white: #fff;
--black: #000;
--dark-gray: #707070;
--color-gainsboro: #d9d9d9;

/* Gaps */
--gap-5xl: 24px;

/* Paddings */
--padding-9xs: 4px;
--padding-base: 16px;
--padding-5xl: 24px;

/* border radiuses */
--br-9xs: 4px;
--br-xl: 20px;
--br-8xs: 5px;
--br-5xs: 8px;

}
`;
