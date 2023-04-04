export function cardType(i) {
  let e = "unknown";
  return (
    /^5[1-5]/.test(i)
      ? (e = "master_card")
      : /^4/.test(i)
      ? (e = "visa")
      : /^3[47]/.test(i)
      ? (e = "american_express")
      : /^(?:2131|1800|35)/.test(i)
      ? (e = "jcb")
      : /^3(?:0[0-5]|[68])/.test(i)
      ? (e = "diners_club")
      : /^6(?:011|5)/.test(i)
      ? (e = "discover")
      : /^220(0|4)/.test(i) && (e = "mir"),
    e
  );
}
