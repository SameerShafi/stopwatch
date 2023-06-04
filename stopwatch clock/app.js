document.addEventListener('DOMContentLoaded', function () {
    let startTime;
    let interval;

    const display = document.getElementById('display');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    function formatTime(milliseconds) {
        const hours = Math.floor(milliseconds / (1000 * 60 * 60));
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }

    function startTimer() {
        startTime = Date.now();
        interval = setInterval(updateTimer, 1000);
        startButton.disabled = true;
        stopButton.disabled = false;
    }

    function stopTimer() {
        clearInterval(interval);
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    function resetTimer() {
        clearInterval(interval);
        display.textContent = '00:00:00';
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    function updateTimer() {
        const elapsedTime = Date.now() - startTime;
        display.textContent = formatTime(elapsedTime);
    }

    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);
    resetButton.addEventListener('click', resetTimer);
});
