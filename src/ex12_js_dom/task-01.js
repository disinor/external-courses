let currentImg = 2;

const rightButton = document.querySelector(".buttonRight");
leftButton = document.querySelector(".buttonLeft");

function positionImg() {
  const leftImg = document.querySelector(".leftImage");
  const centerImg = document.querySelector(".centerImage");
  const rightImg = document.querySelector(".rightImage");
/*   const oneChild =document.querySelector('.myImage:nth-child(1)')
  const twoChild =document.querySelector('.myImage:nth-child(2)')
  const thirdCild =document.querySelector('.myImage:nth-child(3)')
  return { leftImg, centerImg, rightImg ,oneChild,twoChild,thirdCild}; */
}

rightButton.addEventListener("click", () => {
    const { leftImg, centerImg, rightImg ,oneChild,twoChild,thirdCild } = positionImg();

  leftImg.classList.remove("leftImage");
  centerImg.classList.remove("centerImage");
  rightImg.classList.remove("rightImage");

  leftImg.classList.add("centerImage");
  centerImg.classList.add("rightImage");
  rightImg.classList.add("leftImage");


  console.log(twoChild);
  twoChild.style.background = `url(asset/img${currentImg}.jpg)`;
  currentImg = currentImg + 1;
});


leftButton.addEventListener("click", () => {
  const { leftImg, centerImg, rightImg ,oneChild,twoChild,thirdCild } = positionImg();
  
  leftImg.classList.remove("leftImage");
  centerImg.classList.remove("centerImage");
  rightImg.classList.remove("rightImage");


  leftImg.classList.add("rightImage");
  centerImg.classList.add("leftImage");
  rightImg.classList.add("centerImage");


});
