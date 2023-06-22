let input = document.querySelectorAll("input");
let span = document.querySelector("span");

function getnetsalary() {
      let gross = input[0].value;
      let ins = input[1].value;
      let tax = input[2].value;
      let bonus = input[3].value;

      let inscost = +gross * (+ins/100);
      let afterins = +gross - +inscost;
      let taxcost = +afterins * (+tax/100);
      let grosstotal = +afterins - +taxcost;
      let net = +grosstotal + +bonus;

      span.innerText = net ;
}

for (let i = 0; i < input.length; i++) {
      input[i].addEventListener('keyup',getnetsalary);
}

