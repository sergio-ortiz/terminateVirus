let currentIndex = -1;
let nextIndex;

function getNextIndexInArray(arr, index) {
  if (index === arr.length - 1) {
    return 0;
  } else {
    return index + 1;
  }
}

function defineNextIndexValue(getter, arr, index) {
  nextIndex = getter(arr, index);
}

function updateIndexValue(newIndex) {
  currentIndex = newIndex;
}

const imageElement = document.getElementById("image-element");

const imageSourceArray = [
  "./assets/1.png",
  "./assets/2.png",
  "./assets/3.png",
  "./assets/4.png",
  "./assets/5.png",
  "./assets/6.png",
  "./assets/7.png",
  "./assets/8.png",
  "./assets/9.png",
  "./assets/10.png",
  "./assets/11.png",
  "./assets/12.png",
  "./assets/13.png",
  "./assets/14.png",
  "./assets/15.png",
  "./assets/16.png",
];

function setImageSourceFromSourceArray(image, arr, index) {
  image.src = arr[index];
}

function updateImage() {
  defineNextIndexValue(getNextIndexInArray, imageSourceArray, currentIndex);
  updateIndexValue(nextIndex);
  setImageSourceFromSourceArray(imageElement, imageSourceArray, currentIndex);
}

export default (function main() {
  updateImage();
  window.setInterval(updateImage, 2000);
})();
