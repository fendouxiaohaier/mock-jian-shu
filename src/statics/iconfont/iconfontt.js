import { createGlobalStyle } from "styled-components";

const GlobalIconFontStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1556065268156'); /* IE9 */
  src: url('./iconfont.eot?t=1556065268156#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1556065268156') format('woff'),
  url('./iconfont.ttf?t=1556065268156') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1556065268156#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

export default GlobalIconFontStyle;
