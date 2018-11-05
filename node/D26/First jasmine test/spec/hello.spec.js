describe("My first jasmine specification test",function(){
    it("should say hello!",function(){
        console.log("Hello, Jasmine!");
        throw new Error();
    });
})

// without error:
// Randomized with seed 13322
// Started
// Hello, Jasmine!
// .


// 1 spec, 0 failures
// Finished in 0.014 seconds
// Randomized with seed 13322 (jasmine --random=true --seed=13322)



// with error:
// Randomized with seed 35173
// Started
// Hello, Jasmine!
// F

// Failures:
// 1) My first jasmine specification test should say hello!
//   Message:
//     Error thrown
//   Stack:
//     Error
//         at UserContext.<anonymous> (/Users/lokwong/code/lokmanwong/node/D26/spec/hello.spec.js:4:15)
//         at <Jasmine>
//         at runCallback (timers.js:694:18)
//         at tryOnImmediate (timers.js:665:5)
//         at processImmediate (timers.js:647:5)

// 1 spec, 1 failure
// Finished in 0.02 seconds
// Randomized with seed 35173 (jasmine --random=true --seed=35173)