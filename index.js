let videoEle = document.getElementById("video-container");
let btnEle = document.getElementById("play-button");

async function setUpPictureInPicture() {
  try {
    const mediaElement = await navigator.mediaDevices.getDisplayMedia();
    videoEle.srcObject = mediaElement;
    videoEle.onloadedmetadata = () => {
      videoEle.play();
    };
  } catch (error) {
    console.log(error);
  }
}

btnEle.addEventListener("click", async () => {
  btnEle.disabled = true;
  await videoEle.requestPictureInPicture();
  btnEle.disabled = false;
});
setUpPictureInPicture();
