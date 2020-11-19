const rightButton = document.querySelector('.button_right');
const leftButton = document.querySelector('.button_left');
const arrImg = [
  'url(asset/img1.jpg)',
  'url(asset/img2.jpg)',
  'url(asset/img3.jpg)',
  'url(asset/img4.jpg)',
  'url(asset/img5.jpg)',
  'url(asset/img6.jpg)',
];
let currentImg = 1;

function positionImg() {
  const leftImg = document.querySelector('.left_image');
  const centerImg = document.querySelector('.center_image');
  const rightImg = document.querySelector('.right_image');

  return { leftImg, centerImg, rightImg };
}

const goToNextSlide = () => {
  const { leftImg, centerImg, rightImg } = positionImg();

  leftImg.classList.remove('left_image', 'imageToLeft');
  rightImg.classList.remove('right_image', 'imageToLeft');
  centerImg.classList.remove('center_image', 'imageToLeft');

  leftImg.classList.remove('left_image', 'imageToRight');
  rightImg.classList.remove('right_image', 'imageToRight');
  centerImg.classList.remove('center_image', 'imageToRight');

  leftImg.classList.add('center_image', 'imageToLeft');
  rightImg.classList.add('left_image', 'imageToLeft');
  centerImg.classList.add('right_image', 'imageToLeft');

  if (currentImg >= 5) {
    currentImg = -1;
    rightImg.style.background = arrImg[5];
  }
  currentImg = currentImg + 1;
  rightImg.style.background = arrImg[currentImg - 1];
  leftImg.style.background = arrImg[currentImg];
};

const goToBackSlide = () => {
  const { leftImg, centerImg, rightImg } = positionImg();

  leftImg.classList.remove('left_image', 'imageToRight');
  rightImg.classList.remove('right_image', 'imageToRight');
  centerImg.classList.remove('center_image', 'imageToRight');

  leftImg.classList.remove('left_image', 'imageToLeft');
  rightImg.classList.remove('right_image', 'imageToLeft');
  centerImg.classList.remove('center_image', 'imageToLeft');

  leftImg.classList.add('right_image', 'imageToRight');
  rightImg.classList.add('center_image', 'imageToRight');
  centerImg.classList.add('left_image', 'imageToRight');

  if (currentImg < 1) {
    currentImg = 6;
    leftImg.style.background = arrImg[0];
  }
  currentImg = currentImg - 1;
  leftImg.style.background = arrImg[currentImg + 1];
  rightImg.style.background = arrImg[currentImg];
};

rightButton.addEventListener('click', goToBackSlide);
leftButton.addEventListener('click', goToNextSlide);
