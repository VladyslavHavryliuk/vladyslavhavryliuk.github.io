document.addEventListener("DOMContentLoaded", () => {
  handleChangingSongName();
  removeTimer();

  document.addEventListener('keydown', handleSpaceKey);
});

function handleChangingSongName() {
  let oldSongName = '';
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
          artistNode.innerHTML = splitName[0];
          songNode.innerHTML = splitName.slice(1, splitName.length).join(' - ');
        } else {
          songNode.innerHTML = mutation.target.textContent;
          artistNode.innerHTML = '&#917536;';
        }
      }
    }
  });
  observer.observe(scriptNameNode, eventConfig);
}

function handleSpaceKey(event) {
  if ((event.code && event.code === 'Space') || (event.key && event.key === ' ')) {
    document.querySelector('div.my_player div.my_play').click();
  }
}

// Remove listening timer created by player.js
function removeTimer() {
  setTimeout(() => {
    document.querySelector('div.my_player div.my_timer').remove();
  }, 1000);
}
