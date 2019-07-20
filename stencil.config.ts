import { Config } from '@stencil/core';
import * as ponyfill from '@material/dom/ponyfill';
import * as mdc from 'material-components-web';
import mdcAutoInit from '@material/auto-init';
// https://stenciljs.com/docs/config

export const config: mdcAutoInit = {
  outputTargets: [{
    type: 'www',
    serviceWorker: null
  }],
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css'
};
