function greet(name){
    console.log(` HELLO  ${name}`)
    return "tada"
}

function higherorderfunction(callback){
    
    const test = callback('ramankutti');
    console.log(test)
}

higherorderfunction(greet);