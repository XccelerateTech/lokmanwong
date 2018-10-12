var arrScore = [29.8, 27.4, 34.2];



var sum = arrScore.reduce(function(accumulator, number){
    return accumulator + number;
}, 0);

averageScore = Math.round(sum / arrScore.length);

