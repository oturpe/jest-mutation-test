test("mutate", () => {
  const fnToTest = jest.fn().mockImplementation((input) => {
    input.a = "new";
  });

  const toBeMutated = { a: "old" };
  fnToTest(toBeMutated);

  // Why is this snapshot accepted, when in fact _fnToTest_ was called with
  // input = { a: "old" }?
  expect(fnToTest.mock.calls).toMatchInlineSnapshot(`
    Array [
      Array [
        Object {
          "a": "new",
        },
      ],
    ]
  `);
});
