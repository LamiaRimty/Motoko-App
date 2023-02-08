import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor TeestaBank{
  stable var currentValue: Float= 300;
   //currentValue:=100;
  Debug.print(debug_show(currentValue));
   
  stable var startTime = Time.now();
  Debug.print(debug_show(startTime));


  public query func checkBalance(): async Float{
    return currentValue;
  };

  public func deposit(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
   };

   public func withdraw( amount:Float){
    let tempValue: Float = currentValue -amount;
    if(tempValue>=0){
     currentValue -= amount;
        return Debug.print(debug_show(currentValue));
    }
    else
    {
      Debug.print(debug_show("Your Current Balance is insuffient!!"));
    }
    
   };

   public func compoundInterest(){
      let currentTime= Time.now();
      let timeElapsedNS = currentTime;
      let timeElapsedS = currentTime/1000000000;
      currentValue:= currentValue*(1.01**Float.fromInt(timeElapsedS));
      startTime := currentTime;
   }


}