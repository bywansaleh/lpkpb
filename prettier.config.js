import * as tailwindPlugin from 'prettier-plugin-tailwindcss';
import sveltePlugin from 'prettier-plugin-svelte';

export default {
  plugins: [sveltePlugin, tailwindPlugin],
  overrides: [{ files: '*.svelte', options: { parser: 'svelte' } }],
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  vueIndentScriptAndStyle: false,
  endOfLine: 'lf',
};
