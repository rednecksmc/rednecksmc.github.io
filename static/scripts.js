var sound = new Howl({
  src: [
    "static/audio/05.mp3",
    "static/audio/04.mp3",
    "static/audio/03.mp3",
    "static/audio/02.mp3",
    "static/audio/01.mp3",
  ],
  autoplay: true,
});

function togglePlayer() {
  const img = this.querySelector("img");
  const played = this.getAttribute("data-played");
  if (played === "1") {
    this.setAttribute("data-played", "0");
    img.setAttribute("src", "static/images/play.svg");
    sound.pause();
  } else {
    this.setAttribute("data-played", "1");
    img.setAttribute("src", "static/images/pause.svg");
    sound.play();
  }
}

document.querySelector(".audio-player").addEventListener("click", togglePlayer);

const buttons = document.querySelectorAll(".enter-website button");

function removeEnterModal() {
  const container = document.querySelector(".enter-website");
  container.remove();
}

Array.from(buttons).forEach((button) =>
  button.addEventListener("click", () => {
    localStorage.setItem("already-in", "1");
    removeEnterModal();
  })
);

const alreadyIn = localStorage.getItem("already-in");

if (alreadyIn === "1") {
  removeEnterModal();
}
