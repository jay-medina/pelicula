module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    settings: {
        react: {
            version: "17.0.1",
        },
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "@typescript-eslint"],
    rules: {
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
    },
};
