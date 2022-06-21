const date = new Date();
const currentYear = date.getFullYear();

let birthYear;
let age;

const result = document.getElementById("ageCalc");

document.getElementById("restartBtn").hidden = true;
document.getElementById("nowYear").innerText = currentYear;

function calcYourAge() {
  document.getElementById("startBtn").hidden = true;
  birthYear = prompt("출생 연도를 입력하세요.(YYYY)", "");
  console.log(birthYear);

  if(birthYear===null){
    error();
    document.getElementById("restartBtn").hidden = false;
    
  } else if (birthYear.length==4 && isNaN(Number(birthYear))==false && birthYear<=currentYear && birthYear !==null) {
    print(currentYear-Number(birthYear)+1);
    document.getElementById("restartBtn").hidden = false;

  } else {
    error();
    document.getElementById("restartBtn").hidden = false;

  }

}

function error() {
  result.innerHTML = "<h3>결과</h3><p>나이를 계산할 수 없습니다.</p>";
}

function print(age) {
  result.innerHTML = `<h3>결과</h3><p>당신의 나이는 ${age}세 입니다.`;
}