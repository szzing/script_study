function displayTime() {
  let time = new Date();
  let currentTime = `íėŽėę° <span>${time.toLocaleTimeString()}</span>`;
  document.querySelector('#clock').innerHTML = currentTime;
}

setInterval(displayTime, 1000);