//Palindrome Program

s = "madam is my mom "
s1 = "" 
s2 = ""
  for (t of s) {
    if (t != " ") {
      s2 = s2 + t
      s1 = t + s1
    }
    else {
      if (s1 == s2) console.log(s1)
      s1 = ""
      s2 = ""
    }
  }
  
// FIzz BUzz Program  

n=100
for(i=1;i<=n;i=i+1){
 a= i/15;
 b= i/5;
 c= i/3;
  if (Number.isInteger(a)) {
    console.log("fizzbuzz")
  }
  else if (Number.isInteger(b)) {
    console.log("buzz")
  }
  else if (Number.isInteger(c)) {
    console.log("fizz")
  }
  else{
    console.log(i)
  }
}
