

function numCheck(e) {
  if (typeof e == "number" && e <= 1000) {
    if (e != 0 && e != 1) {
      if (e % 2 != 0) {
        console.log("простое");
      } else if (e % 2 == 0) {
        console.log("Составное ");
      }
    }else {console.log('0 и 1 не являются простым или составным числом')}
  } else {
    console.log("больше 1000 не работаем)");
  }
}
module.exports = numCheck();