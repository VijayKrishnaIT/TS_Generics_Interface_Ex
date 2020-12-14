/*
function fun_one<T>(arg1: T): T {
    return arg1
}
fun_one<string>("Hello");
fun_one<number>(100);
fun_one<boolean>(true);
//dynamically deciding the type

function fun_two<A>(arg1: A): A {
    return arg1;
}
console.log(fun_two<string>("Hello")); //Hello


console.log(fun_two<number>(100)); //100
console.log(fun_two<boolean>(true)); //true
*/
var obj = {
    arg1: "Hello1"
};
console.log(obj.arg1);
