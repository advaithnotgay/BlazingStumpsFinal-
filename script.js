const countdown = document.getElementById('countdown');
const eventDate = new Date('2025-12-15T09:00:00').getTime();

const updateTimer = () => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdown.innerHTML = `${days}d ${hrs}h ${mins}m ${secs}s`;

  if (distance < 0) {
    countdown.innerHTML = "The tournament has begun!";
  }
};

setInterval(updateTimer, 1000);
