function strToLowerCamalCase(str) {
  const arrStr = str.toLocaleLowerCase().split("");
  const arrNewStr = [];
  const arrStrLowerCamelCaseNotation = [];

  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i - 1] === " ") {
      arrNewStr[i] = arrStr[i].toUpperCase();

      continue;
    }
    arrNewStr[i] = arrStr[i];
  }

  for (let i = 0; i < arrNewStr.length; i++) {
    if (arrNewStr[i] === " ") continue;
    arrStrLowerCamelCaseNotation[i] = arrNewStr[i];
  }
  return (
    arrStrLowerCamelCaseNotation.join("")[0].toLocaleLowerCase() +
    arrStrLowerCamelCaseNotation.join("").slice(1)
  );
}

module.exports = strToLowerCamalCase;
