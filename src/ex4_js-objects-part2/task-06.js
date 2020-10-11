function wordToUpperCase(str) {
  const arrStr = str.split("");
  const arrNewStr = [];

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i - 1] === " ") {
      arrNewStr[i] = arrStr[i].toUpperCase();
      continue;
    }
    arrNewStr[i] = arrStr[i];
  }
  return arrNewStr.join("");
}

module.exports = wordToUpperCase;
