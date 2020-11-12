const rightButton = document.querySelector(".buttonRight");
const leftButton = document.querySelector(".buttonLeft");

function positionImg() {
  const leftImg = document.querySelector(".leftImage");
  const centerImg = document.querySelector(".centerImage");
  const rightImg = document.querySelector(".rightImage");

  return { leftImg, centerImg, rightImg };
}
let currentImg = 2;
leftButton.addEventListener("click", () => {
  const { leftImg, centerImg, rightImg } = positionImg();

  leftImg.classList.remove("leftImage");
  leftImg.classList.add("centerImage");

  centerImg.classList.remove("centerImage");
  centerImg.classList.add("rightImage");

  rightImg.classList.remove("rightImage");
  rightImg.classList.add("leftImage");

/*   leftImg.classList.add("leftImageToCenter");
  centerImg.classList.add("centerImageToRight");
  rightImg.classList.add("rightImageToLeft"); */

  leftImg.classList.remove();
  centerImg.classList.remove();
  rightImg.classList.remove();
  
  if (currentImg >= 6) {
    currentImg = 0;
  }
  currentImg = currentImg + 1;
  leftImg.style.background = `url(asset/img${currentImg}.jpg)`;
});

rightButton.addEventListener("click", () => {
  const { leftImg, centerImg, rightImg } = positionImg();
  console.log(1);
  leftImg.classList.remove("leftImage");
  leftImg.classList.add("rightImage");

  centerImg.classList.remove("centerImage");
  centerImg.classList.add("leftImage");

  rightImg.classList.remove("rightImage");
  rightImg.classList.add("centerImage");

  if (currentImg <= 1) {
    currentImg = 7;
  }
  currentImg = currentImg - 1;
  rightImg.style.background = `url(asset/img${currentImg}.jpg)`;
});
