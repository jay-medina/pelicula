/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
    cacheDirectory: "node_modules/.jest",

    coverageDirectory: "coverage",

    coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/config/*"],

    coverageReporters: ["text", "html"],

    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },

    preset: "ts-jest",

    setupFilesAfterEnv: ["<rootDir>/config/enzyme-adapter.ts"],

    testEnvironment: "node",
};
