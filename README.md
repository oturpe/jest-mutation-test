## jest-mutation-tests

Showcase for strange Jest behavior when using snapshot testing for _mock.calls_
of a function that mutates its input.

### Usage

1. Install dependencies: `npm install`
2. Run the test: `node_modules/.bin/jest`

### Observed result
The test passes

### Expected result
No sure, but the passing inline snapshot in `mutate.test.js` certainly looks
strange.
