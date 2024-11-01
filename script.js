window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.animated');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = 1;
        }, index * 300);
    });
});

document.getElementById('trick-or-treat-button').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.style.display = 'block';
    message.classList.add('boo');

    const messages = [
        '🎃 Boo! Enjoy your treats! 🍬',
        '🕷️ Spooky Night! Have fun! 👻',
        '🍭 Trick or Treat yourself! 🍬',
        '👺 Beware of the ghosts! 👻',
        '🕯️ Light the candles for a spooky night! 🕯️'
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;

    setTimeout(() => {
        message.classList.remove('boo');
    }, 1000);
});
