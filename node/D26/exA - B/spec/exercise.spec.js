/*
A Create a new directory. Init the jasmine in that directory. 
And add one spec file exercise.spec.js to it.

B Continued from A, create one describe block and five it block in it. T
he first 4 should pass with the text I am the it block <number>!. 
And the final one should fail with an error call I am the it block <number> but I fail
*/

describe ('I am the describe block', function (){

    it ('I am the it block 1', function(){
        console.log("I am the it block 1");
    })
    it ('I am the it block 2', function(){
        console.log("I am the it block 2");
    })
    it ('I am the it block 3', function(){
        console.log("I am the it block 3");
    })
    it ('I am the it block 4', function(){
        console.log("I am the it block 4");
    })
    it ('I am the it block 5', function(){
        console.log("I am the it block 5 but I failed");
        throw new Error;
    })
} )

