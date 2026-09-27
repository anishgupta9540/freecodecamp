function isSpam(number) {
  const match = number.match(/^\+(\d+) \((\d{3})\) (\d{3})-(\d{4})$/);

  const countryCode = match[1];
  const areaCode = match[2];
  const firstThree = match[3];
  const lastFour = match[4];

  // Country code rule
  const countrySpam =
    countryCode.length > 2 || !countryCode.startsWith("0");

  // Area code rule
  const areaSpam =
    Number(areaCode) > 900 || Number(areaCode) < 200;

  // Sum of first 3 local digits appears in last 4
  const sum = [...firstThree].reduce(
    (total, digit) => total + Number(digit),
    0
  );

  const localSpam = lastFour.includes(String(sum));

  // Four or more identical digits in a row
  const digits = number.replace(/\D/g, "");
  const repeatedSpam = /(\d)\1{3}/.test(digits);

  return countrySpam || areaSpam || localSpam || repeatedSpam;
}

module.exports = isSpam;