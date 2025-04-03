let intervalId;
let isZPressed = false;
let timer = 50;

function simulateKeyPress(key) {
    const event = new KeyboardEvent('keydown', {
        key: key,
        code: `Key${key.toUpperCase()}`,
        bubbles: true
    });
    document.dispatchEvent(event);
}

function simulateKeyRelease(key) {
    const event = new KeyboardEvent('keyup', {
        key: key,
        code: `Key${key.toUpperCase()}`,
        bubbles: true
    });
    document.dispatchEvent(event);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'z' && !isZPressed) {
        isZPressed = true;
        intervalId = setInterval(() => {
            simulateKeyPress('x');
            setTimeout(() => {
                simulateKeyRelease('x');
            }, timer / 2);
        }, timer);
    }
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'z') {
        isZPressed = false;
        clearInterval(intervalId);
        simulateKeyRelease('x');
    }
});
