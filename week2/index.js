console.log("안녕 코드샌드박스")
/*
let age=25;
console.group(age);
const num =25;
console.log(num);
*/

let name = "이정환";
let location ="역곡";
let introduce=`${name}은 ${location}에 살고 있습니다`; //'(백틱) 이용하면 문자열 사이에 변수 사용 가능

//명시적 형 변환 
//-> parseInt는 숫자+문자 문자열을 숫자로 변환
let strA="10";
let strB="10개";
let numA=parseInt(strA,10);
let numB=parseInt(strB,10);
console.log(numA);
console.log(numB);
//->숫자열을 문자열로 변환
let num =2022;
let str=String(num);//함수 String 이용
console.log(str);

//환영인사 함수선언
function greeting(){
    console.log("안녕하세요")
}

greeting(); //호출

//화살표 함수
let greeting =(name) => {
    let greetingText = `hello ${name}`;
    return greetingText;
};

comsole.log(greeting("이정환"));

//객체-프로퍼티 접급
let person={
    name:"이정환",
    age:25,
    "like cat":true
};

const personName=person.name; //점 표기법
const personAge=person["age"]; //괄호 표기법

person.gender="male"; //점 표기법으로 프로퍼티 추가
person["age"]=5; //프로퍼티 수정
delete person.name;//프로퍼티 삭제

console.log(personName);
console.log(personAge);

