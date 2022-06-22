document.getElementById("restartBtn").hidden = true;
document.getElementById("userInput").hidden = true;
const docTotalPeople = document.getElementById("totalPeople");
const docLinePeople = document.getElementById("linePeople");
const seatResult = document.getElementById("seatCalc");
let total;
let line;

function calcSeats() {
  document.getElementById("startBtn").hidden = true;
  total = prompt("총 인원은 몇 명인가요?", "");
  line = prompt("한 줄에 몇 명씩 앉나요?", "");

  if(total===null || line === null){
    console.log("null");
    error();
    
  } else if (isNaN(Number(total))===false && isNaN(Number(line))===false) {
    docTotalPeople.innerText = total;
    docLinePeople.innerText = line;
    document.getElementById("userInput").hidden = false;

    let col = line;
    let row = Number(total/line);
    let remind = Number(total%line);
    let cnt = 0;

    let table = document.createElement("table");
    table.style = "border:1px solid; text-align:center";
    seatResult.appendChild(table);

    while(cnt<total) {
      for(let i=0; i<row; i++) {
        let tr = document.createElement("tr");
        tr.style = "border:1px solid";
        table.appendChild(tr);
        for(let j=0; j<col; j++) {
          let td = document.createElement("td");
          td.style = "width: 150px; border:1px solid; padding:5px;";
          if(cnt>=total) {
            tr.appendChild(td);
            td.innerText = ` `;
            ++cnt;
          } else {
            tr.appendChild(td);
            td.innerText = `좌석 ${++cnt}`;
          }
        }
      }
    }
    print();
    document.getElementById("restartBtn").hidden = false;

  } else {
    console.log("else");
    error();
    document.getElementById("restartBtn").hidden = false;

  }

}

function error() {
  document.getElementById("result").innerHTML = "<h3>결과</h3><p>배치도를 만들 수 없습니다.</p>";
}