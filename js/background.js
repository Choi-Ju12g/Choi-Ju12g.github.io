const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const button = document.querySelector("#changeBgBtn");
const body = document.querySelector("body");
function changeBackgroundColor(){
  let randomNumIndex = []
  for(i = 0 ; i<2; i++){
    const randomNum = Math.floor(Math.random()*colors.length);
    if(randomNumIndex.indexOf(randomNum) === -1){
      randomNumIndex.push(randomNum)
    }else{
      i--;
    }
  }
  body.style.background = `linear-gradient(to right, ${colors[randomNumIndex[0]]},${colors[randomNumIndex[1]]})`;
}

changeBackgroundColor();
button.addEventListener("click",changeBackgroundColor);