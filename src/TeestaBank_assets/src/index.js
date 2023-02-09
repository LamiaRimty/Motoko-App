import { TeestaBank } from "../../declarations/TeestaBank";

window.addEventListener("load", async ()=>{
  const currentAmount = await TeestaBank.checkBalance();
  document.getElementById("balance").innerText =Math.round(currentAmount*100)/100;


});

document.querySelector("form").addEventListener("submit" ,async(event)=>{
  event.preventDefault();

  const deposit=parseFloat(document.getElementById("deposit-amount").value);
  const withdraw=parseFloat(document.getElementById("withdraw-amount").value);

  await TeestaBank.deposit(deposit-amount);
  
});


// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("name").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await TeestaBank.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });
