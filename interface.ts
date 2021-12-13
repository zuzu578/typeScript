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