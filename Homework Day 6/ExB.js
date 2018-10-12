let arr = [12345];
y= arr.toString("");
y.split("");
z=y.split("");
z.sort(function(first, second){
    return second > first;
});

z.map(Number);
(5) [5, 4, 3, 2, 1]