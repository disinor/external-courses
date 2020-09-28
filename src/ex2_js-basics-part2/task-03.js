function checkEven(e) {
  let even = 0;
  let notEven = 0;
  let zero = 0;

  e.forEach((element) => {
    if (typeof element !== "number") {
      console.log("В массиве есть не число");
    }
    if (element === 0) {
      zero += 1;
    }
    if (element % 2 === 0) {
      even+=1;
    }
    if (element % 2 !== 0) {
      notEven+=1;
    }
  });

  return `${even}${notEven}${zero}`;
}

module.exports = checkEven();
