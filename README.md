# typeScript


``` javascript

/**
 * @interface 
 
interface myValue {
    label : string;
    size : number;
}

const myTempFnc = (myObj : myValue) =>{
    
    console.log(myObj.label);
    console.log(myObj.size);
    
}

let myObj = {size:10 , label:"Size 10 Object"}
myTempFnc(myObj);
*/
/**
 * @Optional properties
 * @description : 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는 "option bags" 패턴을 만들때 유용합니다.
 * @description : 선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 ?를 붙여 표시합니다. 


interface SquareConfig {
    color? : string;
    width? : number;
}

// 선택적으로 , 객체 안의 몇개 프로퍼티만 채워 함수에 전달한다. 
function createSquare(config : SquareConfig) : {color:string ; area : number} {
    
    let newSquare = {color: "white" , area:100};

    if(config.color){
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
    
}

let mySquare = createSquare({color: "black"});
 */
/**
 * @description : 읽기전용 프로퍼티
 * @description : readonly 를 넣어서 지정할수있습니다.
 * 
 */

/*
interface Point {
    readonly x : number; 
    readonly y : number;
}

let p1: Point = {x : 10 , y:20};

// readonly 로 지정된 프로퍼티는 수정할수없다.
//p1.x = 5;
*/
/**
 * interface Class Types ( 인터페이스 Class Types )
 * @description : Class Types으로 인터페이스를 기술하는 방법입니다. 
 */

interface ClockInterface {
    currentTime : Date;
}

class Clock implements ClockInterface {
    currentTime : Date = new Date();
    constructor(h:number , m : number){

    }
}

let clock = new Clock(20,30);
console.log(clock.currentTime);


/**
 * 인터페이스 확장 (Extending Interfaces)
 * 클래스처럼 인터페이스도 확장 (상속)가능 , 
 */

interface Shape {
    color:string;
}
interface Square extends Shape{
    sideLength : number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 20;




function tempFnc(param1:string , param2:string) : string {
    let words = param1 + param2;
    return words; 
}
let param1:string  = "hello";
let param2:string = "world";

let logging : string = tempFnc(param1,param2);

console.log('logging ---------->' , logging);

// 기본 - 초기화 매개변수 

function buildName(firstName : string , lastName = 'zuzu'){
    return firstName + lastName;
}

const result: string = buildName('zuzu2',undefined);


class Person{
    myName : string ;
    constructor(name : string){
        this.myName = name;
    }
    hello(){
        return this.myName + "hello";
    }
}

const p1 = new Person('zuzu');

console.log(p1.hello());


/**
 * inheritance(상속)
 */

class Animal {
    move(distance: number = 0){
        console.log(`${distance}`);
    }
}

class Dog extends Animal{
    bark(){
        console.log('bark');
    }
}

const d1 = new Dog();
d1.move();
d1.bark();

/**
 * 접근제어자 (access modifier)
 */


class tempClass {
    private name : string; 
    private moveParams : string; 
    constructor(myName : string , moveParams : string){
        this.name = myName;
        this.moveParams = moveParams;
    }
    public move(moveParam : string) : string{
        let mv : string = moveParam;
        return mv;
    }
}
let myName : string = "zuzu";
let moveParams : string = "moving moving";
const t1 = new tempClass(myName,moveParams);
let myResult : string = t1.move(moveParams);

console.log('myResult => ' , myResult);

/**
 * @description : generic 
 */
function identity<T>(arg:T):T{
    return arg;
}

let output = identity<String>("myString");



interface tempI{
    name : string ;
}


let dw2 = {} as tempI;
dw2.name = '312321';





```
