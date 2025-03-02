// Copyright 2022 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

module.exports = function (config) {
  config.set({
    frameworks: ["jasmine"],
    files: [
      "src/**/*.ts",
    ],
    exclude: [
      // We don't want node-specific files when running in a browser.
      "src/nodeonly/**/*.ts",
    ],
    singleRun: true,
    reporters: ["progress"],
    browsers: ["ChromeCustom"],
    preprocessors: {"/**/*.ts": "esbuild"},
    esbuild: {
      target: "esnext",
      tsconfig: "./tsconfig.json",
    },
    customLaunchers: {
      ChromeCustom: {
        base: "ChromeHeadless",
        // We ignore the certificate errors as the client certificates are managed by the browser.
        flags: ["--ignore-certificate-errors"],
      },
    },
  });
}
