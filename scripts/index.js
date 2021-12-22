document.addEventListener("DOMContentLoaded", () => {
  handleChangingSongName();
  removeTimer();
});

function handleChangingSongName() {
  let oldSongName = '';
  const displayNoneClass = 'd-none';
  const scriptNameNode = document.querySelector('div[data-myinfo="song"]');
  const songNode = document.querySelector('.song-info .song');
  const artistNode = document.querySelector('.song-info .artist');
  const eventConfig = {
    attributes: true,
    childList: true,
    subtree: true,
  };
  const observer = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
      if (mutation.type === 'childList' && mutation.target.textContent !== oldSongName) {
        oldSongName = mutation.target.textContent;
        const splitName = mutation.target.textContent.split(' - ');
        if (splitName.length > 1) {
          if (artistNode.classList.contains(displayNoneClass)) {
            artistNode.classList.remove(displayNoneClass);
          }
          artistNode.innerHTML = splitName[0];
          songNode.innerHTML = splitName.slice(1, splitName.length).join(' - ');
        } else {
          songNode.innerHTML = mutation.target.textContent;
          artistNode.classList.add(displayNoneClass);
        }
      }
    }
  });
  observer.observe(scriptNameNode, eventConfig);
}

// Remove listening timer created by player.js
function removeTimer() {
  setTimeout(() => {
    document.querySelector('div.my_timer').remove();
  }, 1000);
}
