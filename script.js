function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    const clockElement = document.getElementById('clock');
    clockElement.textContent = timeString;

    // Trigger pulse animation at the start of every minute
    if (seconds === '00') {
        clockElement.classList.add('pulse');
        setTimeout(() => {
            clockElement.classList.remove('pulse');
        }, 1000); // The pulse animation lasts for 1 second
    }
}

// Apply the pulse class for the animation
document.styleSheets[0].insertRule(`
    #clock.pulse {
        animation: pulse 1s;
    }
`, 0);

setInterval(updateClock, 1000); // Update the clock every second
