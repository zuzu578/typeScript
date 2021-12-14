# typescript tutorial

# function return type ( string )

``` typescript

const myFnc = ():number => {

    return 10;
}

```
# function return type ( number )
``` typescript

const myFnc = ():string => {

    return "string return";
}

```
# function return type ( array )
``` typescript

const myFnc = ():Array<String> => {
    let myArr = [];
    myArr.push('10');
    return myArr;
}

```
# interface 

```typescript

interface LabeledValue {
    label : string
   
}

const printLabel = (labelObj : LabeledValue) =>{
    console.log(labelObj.label);
  
    
}

printLabel({label:"is label"})

```
# Optional Properties ( 선택적 프로퍼티 )

``` typescript 

interface tempI {
    test1 : string ; 
    test2? : number;
}

const testFnc = (testParam : tempI) =>{

    console.log(testParam.test1);
}

testFnc({test1 : 'hello'})


```
이렇게 객체 안의 몇 개의 프로퍼티만 채워 함수에 전달하는 option bags 같은 패턴을 만들때 유용하다.
선택적 프로퍼티는 선언에서 프로퍼티 이름 끝에 ? 을 붙여 표시한다. 

# Readonly properties ( 읽기전용 프로퍼티 ) 
초기에 설정하고 변경 불가한 상태로 만들고 싶을때 사용하면된다.
변수에는 const 를 사용하고 프로퍼티 에는 readonly 를 사용하면된다.

``` typescript

interface testI {
 readonly x : number ; 
 readonly y : string ;
}

```

# Class Type Implementing an interface ( 클래스 타입 인터페이스 구현하기 ) 

```typescript
interface myTestInterFace {
    test: string;
}

class testClass implements myTestInterFace{
    
    param1 : number ; 
    param2 : number;
    constructor(param1:number , param2:number){
        this.param1 = param1;
        this.param2 = param2;
    }
   
    test = 'hello world';
    
}

const t1 = new testClass(20,30);

```

# Extending Interfaces ( 인터페이스 확장 ) 
인터페이스들 끼리 상속 할수있다. 단 , 클래스 는  인터페이스 를 extends 할수 없다. ( 이때는 implements 한다고 한다 )

인터페이스 끼리는 ( extends ) 라고한다.

``` typescript
interface testInterface {
    testParam : string ; 
}

interface testInterface2 extends testInterface{
    testparam2 : number;
}

let extendsInterfaces = {} as testInterface2

extendsInterfaces.testParam = 'hello'
extendsInterfaces.testparam2 = 20;


```

이 코드는 바르지않은 코드이다. 클래스 입장에서는 인터페이스를 구현한다고 하지 , 상속한다고 표현하지 않는다.
```typescript
//❌wrong 
interface SelectableControl extends Control{

}

class Control extends SelectableControl{

}
//✅correct! 
interface SelectableControl{

}
class Control implements SelectableControl{

}


```


