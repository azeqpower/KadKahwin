const targetDate = new Date("2025-06-20T11:00:00").getTime();
const timerElement = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  timerElement.innerHTML = `${days}d ${hours}h ${mins}m ${secs}s`;

  if (distance < 0) {
    timerElement.innerHTML = "The wedding has started!";
  }
}, 1000);
