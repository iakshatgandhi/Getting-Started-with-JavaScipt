function thisIsAsync(){
    let p = new Promise (function(resolve){
        setTimeout(function(){
            resolve("This is a promise");
        }, 2000);
    });
    return p;
}

async function main(){
    let result = await thisIsAsync();
    console.log(result);
}


main();