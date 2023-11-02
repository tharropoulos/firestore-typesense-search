module.exports = {
  globalSetup: "./test/support/globalSetup.js",
  globalTeardown: "./test/support/globalTeardown.js",
  setupFiles: ["./test/support/dotenv.js"],
  verbose: true,
  testTimeout: 300000,
  maxConcurrency: 1,
  maxWorkers: 1,
};
