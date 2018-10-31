class User {
    constructor(options) {
        this.name.first = options.name.first;
        this.name.last = options.name.last;
        this.email = options.email;
        this.DOB = options.DOB;
    }
}

    function getRandom(callback) {
        var http = new XMLHttpRequest();
    
    http.open('GET', `https://randomuser.me/api/`, true)
    http.onreadystatechange = function () {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            //let data = JSON.parse(http.responseText);
            callback(http.responseText); //get data into DOM
    
            
        } else {
            console.log('error occurred' + http.status);
        }
       
       
    }
        http.send();
    }

    getRandom(
        function getdata(rawData){
            let parsedData =  JSON.parse(rawData);
       console.log(parsedData);
//        let arr = parsedData.people.map(function(p){
//            return p.name;
//        })
//    console.log(arr)
   })
    //invoke function ==> callback function
    
    
    // a) Create a class called User.   The class should be initialized with first name, last name, email, date of birth. 
    // b) Write a function that makes API calls to the random user generator. 
    // c) Using the API initialize 5 different users using the class you created in a) 
    
    // Hint:
    
    // Try typing in https://randomuser.me/api/ into the browser and see what you get back in return.
    // If the returned data contains an array which also contains an object inside, how can you create a new User() by passing that object into the constructor(data)?