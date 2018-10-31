var http = new XMLHttpRequest();

//add url ${endpoint/${value}}

function tellMeNow(endpoint, value, callback) {


http.open('GET', 'https://restcountries.eu/rest/v2/${capital}/${capital}');
http.onreadystatechange = function () {
    if(http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        callback(http.responseText); //get data into DOM
    } else {
        console.log('error occurred' + http.status);
    }
}
}

http.send();


//
tellMeNow(capital, europe, function(callback)){
    console.log(JSON.parse(callback))

}