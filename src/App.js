import React from 'react';
import { createGlobalStyle } from 'styled-components';

import OpenSansLightWoffTwo from './assets/fonts/OpenSans-Light.woff2';
import OpenSansLightItalicWoffTwo from './assets/fonts/OpenSans-LightItalic.woff2';
import OpenSansRegularWoffTwo from './assets/fonts/OpenSans-Regular.woff2';
import OpenSansRegularItalicWoffTwo from './assets/fonts/OpenSans-RegularItalic.woff2';
import OpenSansSemiBoldWoffTwo from './assets/fonts/OpenSans-SemiBold.woff2';
import OpenSansSemiBoldItalicWoffTwo from './assets/fonts/OpenSans-SemiBoldItalic.woff2';
import OpenSansBoldWoffTwo from './assets/fonts/OpenSans-Bold.woff2';
import OpenSansBoldItalicWoffTwo from './assets/fonts/OpenSans-BoldItalic.woff2';
import OpenSansExtraBoldWoffTwo from './assets/fonts/OpenSans-ExtraBold.woff2';
import OpenSansExtraBoldItalicWoffTwo from './assets/fonts/OpenSans-ExtraBoldItalic.woff2';

import OpenSansLightWoff from './assets/fonts/OpenSans-Light.woff';
import OpenSansLightItalicWoff from './assets/fonts/OpenSans-LightItalic.woff';
import OpenSansRegularWoff from './assets/fonts/OpenSans-Regular.woff';
import OpenSansRegularItalicWoff from './assets/fonts/OpenSans-RegularItalic.woff';
import OpenSansSemiBoldWoff from './assets/fonts/OpenSans-SemiBold.woff';
import OpenSansSemiBoldItalicWoff from './assets/fonts/OpenSans-SemiBoldItalic.woff';
import OpenSansBoldWoff from './assets/fonts/OpenSans-Bold.woff';
import OpenSansBoldItalicWoff from './assets/fonts/OpenSans-BoldItalic.woff';
import OpenSansExtraBoldWoff from './assets/fonts/OpenSans-ExtraBold.woff';
import OpenSansExtraBoldItalicWoff from './assets/fonts/OpenSans-ExtraBoldItalic.woff';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    src:
      url('${OpenSansLightWoffTwo}') format('woff2'),
      url('${OpenSansLightWoff}') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 300;
    src:
      url('${OpenSansLightItalicWoffTwo}') format('woff2'),
      url('${OpenSansLightItalicWoff}') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    src:
      url('${OpenSansRegularWoffTwo}') format('woff2'),
      url('${OpenSansRegularWoff}') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: normal;
    src:
      url('${OpenSansRegularItalicWoffTwo}') format('woff2'),
      url('${OpenSansRegularItalicWoff}') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    src:
      url('${OpenSansSemiBoldWoffTwo}') format('woff2'),
      url('${OpenSansSemiBoldWoff}') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 600;
    src:
      url('${OpenSansSemiBoldItalicWoffTwo}') format('woff2'),
      url('${OpenSansSemiBoldItalicWoff}') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: bold;
    src:
      url('${OpenSansBoldWoffTwo}') format('woff2'),
      url('${OpenSansBoldWoff}') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: bold;
    src:
      url('${OpenSansBoldItalicWoffTwo}') format('woff2'),
      url('${OpenSansBoldItalicWoff}') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    src:
      url('${OpenSansExtraBoldWoffTwo}') format('woff2'),
      url('${OpenSansExtraBoldWoff}') format('woff');
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 800;
    src:
      url('${OpenSansExtraBoldItalicWoffTwo}') format('woff2'),
      url('${OpenSansExtraBoldItalicWoff}') format('woff');
  }

  html, body {
    font-family: 'Open Sans', sans-serif;
  }
`;

const App = ({ title }) => (
  <>
    <GlobalStyle />
    <div>{title}</div>
  </>
);

export default App;
