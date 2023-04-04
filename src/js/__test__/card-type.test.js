import { cardType } from "../card-type";

test.each([
  { data: "4556483972123366", expected: "visa" },
  { data: "5467312576342582", expected: "master_card" },
  { data: "349489059494901", expected: "american_express" },
  { data: "3534463819617043", expected: "jcb" },
  { data: "36821799806663", expected: "diners_club" },
  { data: "6011432275288149", expected: "discover" },
  { data: "2200000000000004", expected: "mir" },
  { data: "110000000000010", expected: "unknown" },
])("correct operation of the cardType", ({ data, expected }) => {
  expect(cardType(data)).toEqual(expected);
});
