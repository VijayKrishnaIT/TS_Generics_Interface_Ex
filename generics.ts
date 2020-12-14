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

/*
//array example
function fun_one<T>(arg1: T[]): T[] {
    return arg1;
}
let arr1 = fun_one<string>(["Hello1", "Hello2", "Hello3"]);

arr1.push("Hello4");
// arr1.push(100); // Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(arr1);// [ 'Hello1', 'Hello2', 'Hello3', 'Hello4' ]

let arr2 = fun_one<number>([100, 200, 300]); //[ 100, 200, 300, 400 ]

arr2.push(400);
console.log(arr2);

*/

/*
//void means function won't return anything
function fun_one<A, B>(arg1: A, arg2: B): void {
    console.log(arg1, arg2);
}
fun_one<string, string>("hello1", "hello2"); // hello1 hello2
fun_one<number, number>(100, 200 // 100 200
fun_one<any, any>(true, "Hello");   // true Hello
*/
/*
class class_one<A, B>{
    private var_one: A;
    private var_two: B;
    //A and B decided dynamically
    constructor(arg1: A, arg2: B) {
        this.var_one = arg1;
        this.var_two = arg2;
    };
    fun_one(): any {
        return this.var_one + " " + this.var_two;
    }
}
let obj: class_one<string, string> = new class_one<string, string>("Hello1", "Hello2");

let obj1: class_one<string, string> = new class_one<string, string>("hello1", "hello2");

console.log(obj1.fun_one());    //hello1 hello2
console.log(obj.fun_one());     //Hello1 Hello2

let obj2: class_one<number, number> = new class_one(100, 1000);
console.log(obj2.fun_one());    //100 1000

let obj3: class_one<any, any> = new class_one("Hello1", 100);
console.log(obj3.fun_one());    //Hello1 100
*/

/*
//implentation provided by funtion
interface interface1<T, U> {
    (arg1: T, arg2: U): void;
}
function fun_one(arg1: string, arg2: string): void {
    console.log(arg1, arg2);
}
let obj: interface1<string, string> = fun_one;
obj("hello1", "hello2");        //hello1 hello2

*/

interface interface1<A> {
    (arg1: A): void;
};
function fun_one(arg1: string): void {
    console.log(arg1);
}

function fun_two(arg1: number): void {
    console.log(arg1)
}

let obj: interface1<string> = fun_one;
obj("Hello1");           //Hello1

let obj1: interface1<number> = fun_two;
obj1(100);                 //100