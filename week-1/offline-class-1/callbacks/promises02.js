// approach 1 - i.e wrapping the another async function
function myOwnTimeout(fn,duration){
    setTimeout(fn,duration);
}

myOwnTimeout(function(){
    console.log("This is a first promise");
},1000);


// approach 2 - i.e using promises
function thisIsAsync(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("This is a second promise");
        }, 3000);
    });
}
console.log(Promise);
thisIsAsync().then(function(result){
    console.log(result);
});

// approach 3 - i.e using async await

async function main(){
    let result = await thisIsAsync();
    console.log(result);
}

main();