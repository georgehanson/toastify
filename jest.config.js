module.exports = {
    "roots": [
        "<rootDir>/tests"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "moduleNameMapper": {
        "\\.(css|less|scss)$": "<rootDir>/tests/__mocks__/styleMock.js"
    }
}
