
function requestFullscreen() {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { // Safari
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE11
        elem.msRequestFullscreen();
    }
}

window.addEventListener('load', () => {
    // Only prompt on Android devices
    const isAndroid = /Android/i.test(navigator.userAgent);
    if (isAndroid) {
        // Create a button to trigger fullscreen
        const btn = document.createElement('button');
        btn.textContent = 'Go Fullscreen';
        btn.style.position = 'fixed';
        btn.style.bottom = '20px';
        btn.style.right = '20px';
        btn.style.zIndex = '9999';
        btn.style.padding = '1em';
        btn.style.background = '#222';
        btn.style.color = '#fff';
        btn.style.border = 'none';
        btn.style.borderRadius = '8px';
        btn.style.fontSize = '1em';
        btn.onclick = () => {
        requestFullscreen();
        btn.remove();
        };
        document.body.appendChild(btn);
    }
});
