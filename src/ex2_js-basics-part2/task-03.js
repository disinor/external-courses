function checkEven(e) {
  let [even, notEven, zero] = [0, 0, 0];

  e.forEach((element) => {
    if (typeof element === "number") {
      if (element === 0) {
        zero += 1;
      } else {
        if (element % 2 === 0) {
          even += 1;
        } else {
          notEven += 1;
        }
      }
    } else console.log("В массиве есть не число");
  });

  return [even, notEven, zero];
}

module.exports = checkEven;
