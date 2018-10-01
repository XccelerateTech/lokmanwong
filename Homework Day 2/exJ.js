//using while loop

function number(x) {
   if (x <= 0 || isNaN(x)){
     return "ERROR";
   }

   while (x <= 1000000) {
      x = x*10;
   }
   return x;
}

// using for loop

function number(x) {
   if (x <= 0 || isNaN(x)){
     return "ERROR";
   }

   for (;x <= 1000000;x=x*10) {
   }
   return x;
}



