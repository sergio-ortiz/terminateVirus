let indexState = -1;

function nextIndex(arr, index) {
  if (index === arr.length - 1) {
    return 0;
  } else {
    return index + 1;
  }
}

function updateImage(imageElement, imagePaths) {
  indexState = nextIndex(imagePaths, indexState);
  imageElement.src = imagePaths[indexState];
}

export function carousel(imageElement, imagePaths) {
  updateImage(imageElement, imagePaths);
  window.setInterval(updateImage, 2000, imageElement, imagePaths);
}
