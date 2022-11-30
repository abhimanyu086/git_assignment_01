let str="dad";
let new_str="";
for(let i=str.length-1;i>=0;i--){
  new_str=new_str+str[i];
}

if(str===newstr){
  console.log("Palindrome");
}else{
  console.log(Not Palindrome);
}