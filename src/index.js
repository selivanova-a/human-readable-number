module.exports = function toReadable (number) {
  const unitsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tenPlusArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tensArray = [null, 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number - (hundreds * 100)) / 10);
  const units = number - (hundreds * 100) - (tens * 10);

  let answer = [];
  if (number === 0) answer.push(`${unitsArray[0]}`);
  if (hundreds > 0) answer.push(`${unitsArray[hundreds]} hundred`);
  if (tens === 1) answer.push(`${tenPlusArray[units]}`);
  if (tens > 1) answer.push(`${tensArray[tens]}`);
  if (units > 0 && tens !== 1) answer.push(`${unitsArray[units]}`);

  return answer.join(' ');
};
