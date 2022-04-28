/* Theory questions!
* 
* 1. null || 2 || undefined                 = 2
* 2. alert(alert(1) || 2 || alert(3))       = Alerts 1 and Alerts 2
* 3. alert(alert(1) && alert(2))            = Alerts 1, Alerts undefined
* 4. alert(null || 2 && 3 || 4)             = Alerts 3
* 5. Done down in the script
* 6. alert(alert(null) ?? null ?? 2 ?? alert(3)) = alert(null) then alert(2)
* 7. if(-1||0) alert('first') = Executes
*    if(-1&&0) alert('second') = Doesn't execute
*    if(null||-1 && 1) alert('third') = Executes 
* 8. let user;
*    alert(user ?? "Anonymous") = Executes alert anonymous
* 9. Alerts nickName / "Supercoder"
* 10. Alerts "Greetings"
* 11. 
*   1 - true
*   2 - false
*   3 - true - incredible
*   4 - true
*   5 - false
*   6 - false
*   7 - false
* */

// Question 5
// JS needs chain conditions like in python :(
const between = (age) => (14 <= age) === (age <= 90);
console.log(between(90))


// Class stuff
const r = [1, 2, 4, 7, 4, 2, 1, 2, 1];
const sort = (arr) => arr.reduce((acc, previous) => arr.filter(item => item === previous).length === 1 ? previous : acc, undefined);
console.log(sort(r));


const delay = (ms) => new Promise((re, rej) => setTimeout(re, ms));
delay(3000).then(() => console.log('\n\n\nreturns after 3s'));

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);
