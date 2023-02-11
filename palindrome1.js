let str2="";
let str="naman";
for(let i=str.length-1; i>=0; i--){
  str2=str2+str[i];
}
if(str2==str){
  console.log("Palindrome");
}
else{
  console.log("Not Palindrome");
   }