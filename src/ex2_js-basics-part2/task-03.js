let even = 0;
let notEven = 0;
let zero = 0;
function checkEven(e) {
  e.forEach((element) => {
    if (typeof element !== "number") {
      console.log("В массиве есть не число");
    } else if (element === 0) {
      zero + 1;
    } else if (element % 2 === 0) {
      even++;
    } else if (element % 2 !== 0) {
      notEven++;
    }
  });

 return `Четных:${even}; Нечетных:${notEven}; Нулей:${zero}`
}
module.exports = checkEven();
