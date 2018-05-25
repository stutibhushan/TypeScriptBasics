/*type assertion does not change the type of variable at runtime, 
 its purely a way to tell typescript compiler the type of variable
 so it can access the intellisence
*/
let message;
message = "abc";
//let message = "abc";
let endsWithC =(<string> message).endsWith("c");
let alternateWay= (message as string).endsWith("c");