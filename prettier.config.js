// prettier.config.js
const config = {
    trailingComma: 'es5',
    tabWidth: 3,
    semi: false,
    singleQuote: true,
    plugins: ['prettier-plugin-tailwindcss'],
    importOrder: [
        '^(react/(.*)$)|^(react$)',
        '^(next/(.*)$)|^(next$)',
        '<THIRD_PARTY_MODULES>',
        '',
        '^types$',
        '^@/env(.*)$',
        '^@/types/(.*)$',
        '^@/config/(.*)$',
        '^@/lib/(.*)$',
        '^@/hooks/(.*)$',
        '^@/components/ui/(.*)$',
        '^@/components/(.*)$',
        '^@/styles/(.*)$',
        '^@/app/(.*)$',
        '',
        '^[./]',
    ],
    tailwindFunctions: ['clsx', 'cn', 'cva'],
}

module.exports = config
