const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");
module.exports = {
  ...jestConfig,
  moduleNameMapper: {
    "^lightning/navigation$": "<rootDir>/test/jest-mocks/lightning/navigation",
    "^lightning/platformShowToastEvent$":
      "<rootDir>/test/jest-mocks/lightning/platformShowToastEvent",
    "^lightning/uiRecordApi$":
      "<rootDir>/test/jest-mocks/lightning/uiRecordApi",
    "^lightning/messageService$":
      "<rootDir>/test/jest-mocks/lightning/messageService",
    "lightning/flowSupport": "<rootDir>/test/jest-mocks/lightning/flowSupport"
  },
  testPathIgnorePatterns: ["__mockData__"],
  setupFiles: ["./jest.setup.js"]
};
