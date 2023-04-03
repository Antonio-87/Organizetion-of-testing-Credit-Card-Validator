export function isValidInn(namberCard) {
  let sum = 0;
  const num = String(namberCard).replace(/\D/g, "");
  const isOdd = num.length % 2 !== 0;

  if ("" === num) return false;

  for (let i = 0; i < num.length; i++) {
    let n = parseInt(num[i], 10);

    sum += (isOdd | 0) === i % 2 && 9 < (n *= 2) ? n - 9 : n;
  }

  return 0 === sum % 10;
}
