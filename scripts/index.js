document.addEventListener("DOMContentLoaded", () => {
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
        const splitName = mutation.target.textContent.split(' - ');
        oldSongName = mutation.target.textContent;
        artistNode.innerHTML = splitName[0];
        songNode.innerHTML = splitName[1];
      }
    }
  });
  observer.observe(scriptNameNode, eventConfig);
});

window.getRadioStatus = () => {
  fetch('https://myradio24.com/users/2925/status.json')
    .then(res => res.json())
    .then(out => console.log(out))
    .catch(err => console.error(err));
};
