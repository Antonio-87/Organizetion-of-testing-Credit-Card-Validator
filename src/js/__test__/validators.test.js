import { isValidInn } from "../validators";

test.each([
  { data: "4556483972123366", expected: true },
  { data: "5467312576342582", expected: true },
  { data: "349489059494901", expected: true },
  { data: "3534463819617043", expected: true },
  { data: "36821799806663", expected: true },
  { data: "6011432275288149", expected: true },
  { data: "2200000000000004", expected: true },
  { data: "110000000000010", expected: false },
])("correct operation of the cardType", ({ data, expected }) => {
  expect(isValidInn(data)).toEqual(expected);
});
