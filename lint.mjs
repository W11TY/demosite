import { ESLint } from 'eslint';

async function main() {
  const eslint = new ESLint({
    overrideConfig: {
      env: { browser: true, es2021: true, node: true },
      extends: ['eslint:recommended', 'plugin:react/recommended'],
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 12,
        sourceType: 'module',
      },
      settings: { react: { version: 'detect' } },
      rules: { 'react/prop-types': 'off', 'react/react-in-jsx-scope': 'off' }
    },
    useEslintrc: false
  });

  const results = await eslint.lintFiles(['src/pages/**/*.jsx']);
  const formatter = await eslint.loadFormatter('stylish');
  const resultText = formatter.format(results);
  console.log(resultText);
}
main().catch(console.error);
