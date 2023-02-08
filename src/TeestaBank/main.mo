import Debug "mo:base/Debug";
import Nat "mo:base/Nat";

actor TeestaBank{
  stable var currentValue: Nat= 300;
   //currentValue:=100;
  Debug.print(debug_show(currentValue));
   
  public query func checkBalance(): async Nat{
    return currentValue;
  };

  public func deposit(amount: Nat){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
   };

   public func withdraw( amount:Nat){
    let tempValue: Int = currentValue -amount;
    if(tempValue>=0){
     currentValue -= amount;
        return Debug.print(debug_show(currentValue));
    }
    else
    {
      Debug.print(debug_show("Your Current Balance is insuffient!!"));
    }
    
   }


}