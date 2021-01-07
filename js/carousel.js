function getNextIndexInArray(arr, index) {
  if (index === arr.length - 1) {
    return 0;
  } else {
    return index + 1;
  }
}

function updateImage(imageElement, imagePaths, currentIndex) {
  const newIndex = getNextIndexInArray(imagePaths, currentIndex);
  image.src = imagePaths[newIndex];
}

export function carousel(imageElement, imagePaths) {
  let currentIndex = 0;
  updateImage(imageElement, imagePaths, currentIndex);
  window.setInterval(updateImage, 2000, imageElement, imagePaths, currentIndex);
}
