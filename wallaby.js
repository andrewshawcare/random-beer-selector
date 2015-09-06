module.exports = function () {
  return {
    files: [
      {pattern: "lib/bind.js", instrument: false},
      {pattern: "lib/require.js", instrument: false},
      {pattern: "lib/*.js", instrument: false, load: false},
      {pattern: "**/index.js", load: false},
      {pattern: "bootstrap.js", instrument: false}
    ],
    tests: [
      {pattern: "**/index.spec.js", load: false}
    ]
  };
};
