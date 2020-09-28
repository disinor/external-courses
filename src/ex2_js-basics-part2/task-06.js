function numCheck(e) {
  if (typeof e === "number" && e <= 1000 && e !== 0 && e !== 1) {
    if (e % 2 !== 0) {
      return `Число ${e} - простое число`;
      return;
    }

    if (e % 2 === 0) {
      return `Число ${e} - составное число`;
      return;
    }
  } else {
    return "Данные неверны";
  }
}




module.exports = numCheck;
