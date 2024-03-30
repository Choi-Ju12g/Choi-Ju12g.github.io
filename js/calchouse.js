 const 보증 = {
  hug:0.00292,
  hf:0.0004,
  jsg: 0.0024,
}

const 이사비용 = 300000;

class House {
   total; // 전세가
   busPrice ; //교통비
   ratio ; // 이자(2.4 or 2.5)
   manage; // 관리비
   bz; //보증보험에 따른 이율

  constructor(total, busPrice, ratio, manage, bz) {
    this.total = total;
    this.busPrice = busPrice;
    this.ratio = ratio;
    this.manage = manage;
    this.bz = bz;
  }
}

function submitForm() {
  const a = parseFloat(
    (document.getElementById("a")).value 
  );
  const b = parseFloat(
    (document.getElementById("b") ).value
  );
  const c = parseFloat(
    (document.getElementById("c") ).value
  );
  const d = parseFloat(
    (document.getElementById("d") ).value
  );
  const e = 
    (document.getElementById("e").value
  );

  const ee = changebz(e)

  const houseInstance = new House(a, b, c, d, ee);
  return houseInstance;
}

function submitForm2() {
  const a = parseFloat(
    (document.getElementById("a2")  ).value
  );
  const b = parseFloat(
    (document.getElementById("b2") ).value
  );
  const c = parseFloat(
    (document.getElementById("c2")  ).value
  );
  const d = parseFloat(
    (document.getElementById("d2")  ).value
  );
  const e = 
    (document.getElementById("e2").value
  );
  const ee = changebz(e)

  const houseInstance = new House(a, b, c, d, ee);
  return houseInstance;
}

function changebz(value) {
  if(value == 'hug') {
    return 보증.hug
  } else if(value == 'hf') {
    return 보증.hf
  } else {
    return 보증.jsg
  }
}

function calc(){
  const org = submitForm();
  const u = submitForm2();

  const org_total = calcHouse(org, false)
  const u_total = calcHouse(u, true)
  console.warn("11", org, u);
  console.warn('오리진 계산', org_total)
  console.warn('무브 계산', u_total)
  const result = document.querySelector('#result')
  result.innerText = 
  `원래 집 비용 : ${org_total}
  이사 집 비용 : ${u_total}
  비용 차: ${calcMove(org_total, u_total)}`
}

function calcHouse(house, isNew){
  let total = (house.manage+house.busPrice) * 24 + house.total* (house.ratio*2/100) + house.total * house.bz*2
  if(house.bz == 0.0024) {
    total += 1.5
  }

  // 이사비 + 중개보수
  if(isNew){
    total += house.total * 0.003 + 30
  }
  return total
}

function calcMove(org, u) {
  const count = org - u
  return count
}


const button = document.querySelector('#calc')
button.addEventListener('click', () => {calc()})
