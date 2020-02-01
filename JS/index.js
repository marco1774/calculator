let tasti = document.querySelectorAll(".btn");
let numero = "0";
let cacheNumber = "0";
let flagUguale = false;
let operatorType = "";
let resultToDisplay = null;

tasti.forEach(elem =>
  elem.addEventListener("click", event => {
    event.preventDefault();
    document.getElementById("diviso").classList.remove("sign-select");
    document.getElementById("per").classList.remove("sign-select");
    document.getElementById("meno").classList.remove("sign-select");
    document.getElementById("piu").classList.remove("sign-select");
    switch (event.target.innerHTML) {
      case "AC":
        numero = "0";
        cacheNumber = "0";
        showResult("0");
        break;
      case "=":
        uguale(operatorType);
        break;
      case ".":
        numero = numero.concat(".");
        Number(numero);
        showResult(Number(numero));
        break;
      case "/":
        document.getElementById("diviso").classList.add("sign-select");
        cacheNumber = numero;
        numero = "";
        operatorType = "/";
        showResult("0");
        console.log("cache", cacheNumber);
        break;
      case "*":
        document.getElementById("per").classList.add("sign-select");
        cacheNumber = numero;
        numero = "";
        operatorType = "*";
        showResult("0");
        console.log("cache", cacheNumber);
        break;
      case "-":
        document.getElementById("meno").classList.add("sign-select");
        cacheNumber = numero;
        numero = "";
        operatorType = "-";
        showResult("0");
        console.log("cache", cacheNumber);
        break;
      case "+":
        document.getElementById("piu").classList.add("sign-select");
        cacheNumber = numero;
        numero = "";
        operatorType = "+";
        showResult("0");
        console.log("cache", cacheNumber);
        break;

      default:
        aggiungi(event.target.innerHTML);
        showResult(Number(numero));
        break;
    }
    console.log("----------------------------------");
    console.log("premuto", event.target.innerHTML);
    console.log("numero", numero);
    console.log("cache", cacheNumber);
    console.log("operatorType", operatorType);
    console.log("flagUguale", flagUguale);
    console.log("resultToDisplay", resultToDisplay);
    console.log("----------------------------------");
    document.querySelector(".display-cache").innerHTML = Number(cacheNumber);
  })
);

function showResult(num) {
  document.querySelector(".display").innerHTML = Number(num);
}

function uguale(operator) {
  console.log("funzione uguale");
  if (numero === "" || cacheNumber === "0") {
    return;
  }

  if (operator === "+") {
    resultToDisplay = (Number(numero) + Number(cacheNumber)).toFixed(9);
    flagUguale = true;
    cacheNumber = "0";
    operatorType = "";
    numero = resultToDisplay;
    showResult(resultToDisplay);
  }
  if (operator === "-") {
    resultToDisplay = (Number(cacheNumber) - Number(numero)).toFixed(9);
    flagUguale = true;
    cacheNumber = "0";
    operatorType = "";
    numero = resultToDisplay;
    showResult(resultToDisplay);
  }
  if (operator === "*") {
    resultToDisplay = (Number(cacheNumber) * Number(numero)).toFixed(9);
    flagUguale = true;
    cacheNumber = "0";
    operatorType = "";
    numero = resultToDisplay;
    showResult(resultToDisplay);
  }
  if (operator === "/") {
    resultToDisplay = (Number(cacheNumber) / Number(numero)).toFixed(9);
    flagUguale = true;
    cacheNumber = "0";
    operatorType = "";
    numero = resultToDisplay;
    showResult(resultToDisplay);
  }
}

function showResult(num) {
  console.log("NUM", num);
  document.querySelector(".display").innerHTML = Number(num);
}

function aggiungi(numeroUno) {
  let punto = 0;
  if (
    numero.split("").forEach(elem => {
      if (elem === ".") {
        punto++;
      }
    })
  ) {
  }
  if (punto === 1 && numeroUno == ".") {
    punto = 0;
    return;
  }

  if (flagUguale === false) {
    numero = numero.concat(numeroUno);
  } else {
    flagUguale = false;
    numero = "";
    numero = numero.concat(numeroUno);
  }
}
