function displayTime() {
  let time = new Date();
  let currentTime = `현재시각 <span>${time.toLocaleTimeString()}</span>`;
  document.querySelector('#clock').innerHTML = currentTime;
}

setInterval(displayTime, 1000);