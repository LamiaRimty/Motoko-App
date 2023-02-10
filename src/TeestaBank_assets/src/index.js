import { TeestaBank } from "../../declarations/TeestaBank";

window.addEventListener("load", async ()=>{
  updateBalance();
  console.log("loading!");
});

document.querySelector("form").addEventListener("submit" ,async(event)=>{
   console.log("submitted");
    event.preventDefault();

    const button= event.target.querySelector("#submit-btn");

  const depositAmount =parseFloat(document.getElementById("deposit-amount").value);
  const withdrawAmount =parseFloat(document.getElementById("withdraw-amount").value);
   
  button.setAttribute("disabled",true);
  
  if(document.getElementById("deposit-amount").value.length!= 0){
    await TeestaBank.deposit(depositAmount);
  }

  else if(document.getElementById("withdraw-amount").value.length!= 0){
    await TeestaBank.withdraw(withdrawAmount);
  }
  
  await TeestaBank.compoundInterest();

  document.getElementById("deposit-amount").value="";
  document.getElementById("withdraw-amount").value="";
  button.removeAttribute("disabled");

 });

 async function updateBalance(){
  const currentAmount = await TeestaBank.checkBalance();
  document.getElementById("balance").innerText =Math.round(currentAmount*100)/100;
 }

