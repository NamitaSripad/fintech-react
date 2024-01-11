document.getElementById('greetingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    document.getElementById('greetingMessage').innerText = `Hello, ${userName}!`;
    startTimer();
    changeButtonColor();
  });
  let seconds = 0;
  function startTimer() {
    const timerElement = document.getElementById('timer');
    setInterval(() => {
      seconds++;
      timerElement.innerText = `Timer: ${seconds} seconds`;
    }, 1000);
  }
  function changeButtonColor() {
    const buttonElement = document.querySelector('button');
    const randomColor = getRandomColor();
    buttonElement.style.backgroundColor = randomColor;
  }
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }