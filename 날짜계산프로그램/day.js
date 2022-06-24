const form = document.getElementById('form');
const challenge = document.getElementById('challenge');
const userInput = document.getElementById('userInput');
const result = document.getElementById('result');
const date = new Date();

document.getElementById("restartBtn").hidden = true;

function submitHandler(event) {
  event.preventDefault();
  const challengeValue = challenge.value;
  const startday = document.getElementById('startday').value.split('-');

  const today_year = date.getFullYear();
  const today_month = date.getMonth()+1;
  const today_date = date.getDate();

  if(challengeValue.length<1) {
    alert('챌린지명을 입력하세요.');
    return false;
  }

  if(startday[0] > today_year) {
    alert('시작일을 다시 확인하세요.');
    return false;
  } else if(startday[1] > today_month) {
    alert('시작일을 다시 확인하세요.');
    return false;
  } else if(startday[2] >= today_date) {
    alert('시작일을 다시 확인하세요.');
    return false;
  }

  const resultdate = 365*(today_year - startday[0]) + 30*(today_month - startday[1]) + today_date - startday[2];
  userInput.innerHTML = `<h3>${challengeValue} 챌린지</h3> <p>시작일 : ${startday[0]}년 ${startday[1]}월 ${startday[2]}일</p>`;
  result.innerHTML = `<p>${challengeValue}을(를) 시작한지 ${resultdate}일 째입니다.</p>`;
  form.hidden = true;
  document.getElementById("restartBtn").hidden = false;
}

form.addEventListener("submit", submitHandler);