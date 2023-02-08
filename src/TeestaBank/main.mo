import Debug "mo:base/Debug";

actor TeestaBank{
  var currentValue= 300;
   currentValue:=100;
  Debug.print(debug_show(currentValue));
   
  public func deposit(amount: Nat){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
   };

   public func withdraw( amount:Nat){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
   }


}