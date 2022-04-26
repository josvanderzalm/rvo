import * as designTokens from '@nl-rvo/design-tokens/dist/index.js';
import { create } from '@storybook/theming/create';

// For more info on Storybook theming and an overview of all options:
// https://storybook.js.org/docs/react/configure/theming
export default create({
  base: 'light',
  colorPrimary: designTokens.rvoColorHemelblauw,
  colorSecondary: designTokens.rvoColorHemelblauwTint1,

  // UI
  appContentBg: `${designTokens.rvoColorWit}`,
  textColor: `${designTokens.rvoColorGrijs7}`,

  // Typography
  fontBase: `${designTokens.rvoFontSansSerifFontFamily}, ${designTokens.rvoFontSansSerifFallbackFontFamily}`,
  fontCode: 'monospace',
  fontSize: '100%',

  brandTitle: 'NL Design System: RVO',
  brandUrl: 'https://www.rvo.nl',
  brandImage: 'https://www.rvo.nl/assets/logos/logo-nl-nowhitespace.svg',
});
