const rightButton = document.querySelector(".buttonRight");
const leftButton = document.querySelector(".buttonLeft");
const arrImg = [
  `url(asset/img1.jpg)`,
  `url(asset/img2.jpg)`,
  `url(asset/img3.jpg)`,
  `url(asset/img4.jpg)`,
  `url(asset/img5.jpg)`,
  `url(asset/img6.jpg)`,
];
let currentImg = 1;

function positionImg() {
  const leftImg = document.querySelector(".leftImage");
  const centerImg = document.querySelector(".centerImage");
  const rightImg = document.querySelector(".rightImage");

  return { leftImg, centerImg, rightImg };
}

const nextSlide = () => {
  const { leftImg, centerImg, rightImg } = positionImg();

  leftImg.classList.remove("leftImage", "imageToLeft");
  rightImg.classList.remove("rightImage", "imageToLeft");
  centerImg.classList.remove("centerImage", "imageToLeft");

  leftImg.classList.remove("leftImage", "imageToRight");
  rightImg.classList.remove("rightImage", "imageToRight");
  centerImg.classList.remove("centerImage", "imageToRight");

  leftImg.classList.add("centerImage", "imageToLeft");
  rightImg.classList.add("leftImage", "imageToLeft");
  centerImg.classList.add("rightImage", "imageToLeft");

  if (currentImg >= 5) {
    currentImg = -1;
    rightImg.style.background = arrImg[5];
  }
  currentImg = currentImg + 1;
  rightImg.style.background = arrImg[currentImg - 1];
  leftImg.style.background = arrImg[currentImg];
};

const prevSlide = () => {
  const { leftImg, centerImg, rightImg } = positionImg();

  leftImg.classList.remove("leftImage", "imageToRight");
  rightImg.classList.remove("rightImage", "imageToRight");
  centerImg.classList.remove("centerImage", "imageToRight");

  leftImg.classList.remove("leftImage", "imageToLeft");
  rightImg.classList.remove("rightImage", "imageToLeft");
  centerImg.classList.remove("centerImage", "imageToLeft");

  leftImg.classList.add("rightImage", "imageToRight");
  rightImg.classList.add("centerImage", "imageToRight");
  centerImg.classList.add("leftImage", "imageToRight");

  if (currentImg < 1) {
    currentImg = 6;
    leftImg.style.background = arrImg[0];
  }
  currentImg = currentImg - 1;
  leftImg.style.background = arrImg[currentImg + 1];
  rightImg.style.background = arrImg[currentImg];
};

rightButton.addEventListener("click",prevSlide)
leftButton.addEventListener("click",nextSlide)