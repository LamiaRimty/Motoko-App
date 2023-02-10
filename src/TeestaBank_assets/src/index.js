import { TeestaBank } from "../../declarations/TeestaBank";

window.addEventListener("load", async ()=>{
  const currentAmount = await TeestaBank.checkBalance();
  document.getElementById("balance").innerText =Math.round(currentAmount*100)/100;
  console.log("loading!");
});

document.querySelector("form").addEventListener("submit" ,async(event)=>{
   console.log("submitted");
    event.preventDefault();

    const button= event.target.querySelector("#submit-btn");

  const depositAmount =parseFloat(document.getElementById("deposit-amount").value);
  const withdrawAmount =parseFloat(document.getElementById("withdraw-amount").value);
   
  button.setAttribute("disabled",true);
  
  await TeestaBank.deposit(depositAmount);
   //await TeestaBank.withdraw(depositAmount);

   const currentAmount = await TeestaBank.checkBalance();
   document.getElementById("balance").innerText =Math.round(currentAmount*100)/100;

  document.getElementById("deposit-amount").value="";
  button.removeAttribute("disabled");

  
 });

