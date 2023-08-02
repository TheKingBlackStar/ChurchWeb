// JavaScript for the Countdown Timer
const countdownDate = new Date('2023-12-31T23:59:59').getTime(); // Set the target date and time for the countdown

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown-timer').innerHTML = `
    <p>${days}d ${hours}h ${minutes}m ${seconds}s</p>
  `;

  // If the countdown is over, display a message
  if (distance < 0) {
    document.getElementById('countdown-timer').innerHTML = '<p>Coming Soon!</p>';
  }
};

updateCountdown();
setInterval(updateCountdown, 1000); // Update the countdown every second
