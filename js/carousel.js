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

function setImageSourceFromSourceArray(image, arr, index) {
  image.src = arr[index];
}

function updateImage(image, arr) {
  defineNextIndexValue(getNextIndexInArray, arr, currentIndex);
  updateIndexValue(nextIndex);
  setImageSourceFromSourceArray(image, arr, currentIndex);
}

export function main(image, arr) {
  updateImage(image, arr);
  window.setInterval(updateImage, 2000, image, arr);
}
