module.exports = {
    preset: 'ts-jest',

    // Test spec file resolution pattern
    // Matches parent folder `__tests__` and filename
    // should contain `test` or `spec`.
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ["node_modules"],
    moduleNameMapper: {
        "\\.(css|scss|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|html)$": "identity-obj-proxy",
        "office-ui-fabric-react/lib/(.)$": "office-ui-fabric-react/lib-commonjs/$1"
    },
    transform: {
        "^.+\\.[t|j]sx?$": "babel-jest",
    },
    testPathIgnorePatterns: [
        "<rootDir>/lib",
    ],
    transformIgnorePatterns: [
        "/node_modules/",
        "node_modules/(?!(@microsoft/sp-core-library))",
        "node_modules/?!(@microsoft/sp-http)"
    ],
    coveragePathIgnorePatterns: [
        "/__tests__/",
        "node_modules"
    ],
    collectCoverage: true,
    coverageReporters: [
        "json",
        "lcov",
        "text",
        "cobertura"
    ],
    coverageDirectory: "<rootDir>/jest",
    reporters: [
        "default",
        "jest-junit"
    ],
    coverageThreshold: {
        "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 100
        }
    },
    // Setup Enzyme
    "snapshotSerializers": ["enzyme-to-json/serializer"],
    "setupFilesAfterEnv": ["<rootDir>/setupEnzyme.ts"],
};