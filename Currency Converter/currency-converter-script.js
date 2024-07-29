let dropDowns = document.querySelectorAll('.dropdown select');
let btn = document.querySelector('button');
let fromCurr = document.querySelector('#from');
let toCurr = document.querySelector('#to');
let msg = document.querySelector('.msg');

for (const options of dropDowns) {
 for (currCode in countryList) {
  let newOption = document.createElement("option");
  newOption.innerHTML = currCode;
  newOption.value = currCode;
  if (options.name == "from" && currCode == "USD") {
   newOption.selected = "selected";
  } else if (options.name == "to" && currCode == "PKR") {
   newOption.selected = "selected";
  }
  options.append(newOption);
 }
 options.addEventListener('change', (evt) => {
  updateFlag(evt.target);
 });
}

btn.addEventListener('click', (evt) => {
 evt.preventDefault();
 updateExchangeRate();
});

window.addEventListener('load', () => {
 updateExchangeRate();
});

const updateExchangeRate = async () => {
 let amount = document.querySelector('input');
 let amtVal = amount.value;
 if (amtVal == "" || amtVal < 1) {
  amtVal = 1;
  amount.value = "1";
 }
 let baseURL = `https://latest.currency-api.pages.dev/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
 let response = await fetch(baseURL);
 let result = await response.json();
 let finalResult = result[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
 let finalAmount = amtVal * finalResult;
 msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

function updateFlag(element) {
 let currCode = element.value;
 let countryCode = countryList[currCode];
 let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
 let img = element.parentElement.querySelector("img");
 img.src = newSrc;
}