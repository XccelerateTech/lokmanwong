
//add url ${endpoint/${value}}

function informMe(endpoint, value, callback) {
    var http = new XMLHttpRequest();

http.open('GET', `https://restcountries.eu/rest/v2/${endpoint}/${value}`, true)
http.onreadystatechange = function () {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        // let data = JSON.parse(http.responseText);
        callback(http.responseText); //get data into DOM
    } else {
        console.log('error occurred' + http.status);
    }
   
   
}
    http.send();
}



//invoke function ==> callback function
informMe('capital', 'paris',
     function callback(x){
         let y =  JSON.parse(x);
    console.log(y)

})