Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      new Notification('歡迎使用 PWA！');
    }
  });

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.querySelector('#install-btn').style.display = 'block';

  document.querySelector('#install-btn').addEventListener('click', () => {
    deferredPrompt.prompt();
    deferredPrompt = null;
  });
});
