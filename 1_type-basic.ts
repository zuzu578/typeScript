//js 
var str ='hello';

// ts 문자열 선언 방법 
let str2: string = 'hello';
let num: number = 10;
// array 선언 -> 제네릭 
let arr: Array<number> = [1,2,3];
let arr2: Array<String> =['ctt','efef','fewfw'];



const tempFnc = () => {
    /**
     * data type 
     
    let bool : boolean = true;
    if(bool === true){
        console.log('is true');
    }
    let myString : String = 'is String';
    if(typeof myString === 'string'){
        console.log('is' + myString);
    }
    let myArr : Array<String> = new Array<String>(); // String 
    let myArr2 : Array<Number> = new Array<Number>(); // Number
    myArr.push('A','B','C');
    myArr2.push(10,20,30);
    for(let i = 0 ; i < myArr.length ; i++){
        console.log(myArr[i]);
    }
    for(let i = 0 ; i < myArr2.length ; i++){
        console.log(myArr2[i]);
    }
    */

    /**
     * Tuple
    let myTuple : [String , Number];
    myTuple = ["example" , 10];
    console.log(myTuple[0]);
    */

    /**
     * Enum 
     * 열거형 
     
    enum testEnum {hell,o,world}
    let c : testEnum = testEnum.hell;
    */

    /**
     * Any 
     * 타입 검사 X 
     

    let test : any = 'hello';
    
    */
    /**
     * void function 
     
    const voidFnc = (): void =>{
        
    }
    */
    /**
     * number return 
    
    const returnNumber = (): Number =>{
        
        return 20;
    }
    let tempNum : Number = returnNumber();

    console.log('tempNum ===> ' , tempNum);
    */

    /**
     * String return 
     
    const returnString = () : String => {
        return "";
    }
    */

    /**
     * interface
     

    interface TestInterface {
        test : String;
    }
    
    const testFnc = (test:TestInterface) =>{
        console.log('fwefwefw ===>' ,test.test);
    }
    let testObj = {test:'interface'}

    testFnc(testObj);
*/
/**
 * generic 
 
function identity<T>(arg: T): T {
    return arg;
}

let test = identity<string>("myString");
*/

}


tempFnc();


