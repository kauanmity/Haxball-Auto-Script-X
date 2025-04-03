let intervalId;
let isZPressed = false;
let timer = 1

function simulateKeyPress(key) {
    const event = new KeyboardEvent('keydown', {
        key: key,
        code: `Key${key.toUpperCase()}`,
        keyCode: key === 'x' ? 88 : null,
        charCode: key === 'x' ? 88 : null,
        bubbles: true
    });
    document.dispatchEvent(event);
}

function simulateKeyRelease(key) {
    const event = new KeyboardEvent('keyup', {
        key: key,
        code: `Key${key.toUpperCase()}`,
        keyCode: key === 'x' ? 88 : null,
        charCode: key === 'x' ? 88 : null,
        bubbles: true
    });
    document.dispatchEvent(event);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'z' && !isZPressed) {
        isZPressed = true;
        intervalId = setInterval(() => {
            simulateKeyPress('x');"X"
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
