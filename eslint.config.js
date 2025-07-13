import js from '@eslint/js'
import ts from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import pluginPrettier from 'eslint-plugin-prettier'

export default [
    js.configs.recommended,
    ts.configs.recommended,
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: ts.parser,
            parserOptions: { project: './tsconfig.json', sourceType: 'module' }
        },
        plugins: { prettier: pluginPrettier },
        rules: {
            'no-unused-vars': 'error',
            'no-console': 'warn',
            'prettier/prettier': ['error', { singleQuote: true, semi: true, trailingComma: 'all' }]
        }
    },
    prettier
]
