document.addEventListener('DOMContentLoaded', () => {
    const countdownDate = new Date('December 27, 2024 00:00:00').getTime();
    const countdownElement = document.querySelector('.countdown');
    const timeHasComeElement = document.getElementById('timeHasCome');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.style.display = 'none';
            timeHasComeElement.style.display = 'block';
            document.querySelector('.coming-soon').style.display = 'none';
        } else {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById('days').textContent = String(days).padStart(2, '0');
            document.getElementById('hours').textContent = String(hours).padStart(2, '0');
            document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
            document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        }
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
});