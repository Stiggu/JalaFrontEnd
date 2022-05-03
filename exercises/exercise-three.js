setTimeout(function () {
    console.log(1); // Third frame
});

console.log(2); // Immediately

Promise.resolve().then(function () {
    console.log(3); // 2nd frame
});

Promise.resolve().then(function () {
    setTimeout(function () {
        console.log(4); // Fourth Frame
    })
})

setTimeout(function(){
    console.log(5); // Third frame
})

console.log(6); // Immediately

Promise.resolve().then(function(){
    console.log(7); // 2nd frame
})
