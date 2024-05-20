//@ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import vitest from 'eslint-plugin-vitest';
import globals from 'globals';

const tseslintConfig = tseslint.config(
    {
        ignores: ['coverage/', 'jest-extended.d.ts'],
    },

    eslint.configs.recommended,
    tseslint.configs.base,

    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname,
            },
            ecmaVersion: 'latest',
            globals: {
                ...globals.es2020,
                ...globals.node,
            },
        },
    },

    tseslint.configs.eslintRecommended,
    tseslint.configs.recommendedTypeChecked[2],
    tseslint.configs.stylisticTypeChecked[2],

    {
        files: ['eslint.config.mjs'],
        extends: [tseslint.configs.disableTypeChecked],
    },

    {
        files: ['**/*.spec.ts'],
        plugins: {
            vitest,
        },
        rules: {
            ...vitest.configs.recommended.rules,
        },
    },

    eslintConfigPrettier,
);

// console.log(tseslintConfig);

export default tseslintConfig;
