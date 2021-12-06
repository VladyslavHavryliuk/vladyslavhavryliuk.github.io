document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("main-button");
  button.addEventListener("click", () => {
    button.classList.toggle("playing");
    let singer = document.querySelector(
      ".radio-control-button__song-info--singer"
    );
    let song = document.querySelector(".radio-control-button__song-info--song");
    song.innerText =
      song.innerText === "All that she wants"
        ? " Not playing "
        : "All that she wants";
    singer.innerText = singer.innerText === "Ace of Base" ? " " : "Ace of Base";
  });

  console.log(button.className);
});
