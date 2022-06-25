const form = document.getElementById('form');
document.getElementById("restartBtn").hidden = true;

function submitHandler(event) {
  event.preventDefault();
  const total = document.getElementById('total').value;
  
  if(isNaN(total)) {
    alert("숫자로 입력해주세요");
    document.getElementById('total').focus();
    return false;
  }

  random(total);

  form.hidden = true;
  document.getElementById("restartBtn").hidden = false;
}

function random(total) {
  const randomNum = Math.floor(Math.random() * total) + 1;
  document.getElementById('result').innerHTML = `<p>당첨자는 ${randomNum}번 입니다.</p>`;
}

form.addEventListener("submit", submitHandler);