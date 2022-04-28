/* Theory questions!
* 
* 1. null || 2 || undefined = 2
* 2. alert(alert(1) || 2 || alert(3)) = Alerts 1 and Alerts 2
* 3. alert(alert(1) && alert(2)) = Alerts 1
* 4. alert(null || 2 && 3 || 4) = Alerts 3
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