8. Date 객체와 날짜
시간을 표현하는 객체
배열이나 함수처럼 특수한 목적을 수행하기 위해 기능이 추가된 객체

1> Date 객체 생성하기
    오직 생성자 문법으로만 생성 가능
    let date = new Date();
    console.log(date);
    생성자인 Date()에 아무런 인수도 전달하지 않으면 생성 당시의 시간, 즉 현재의 날짜와 시간이 저장된 Date 객체를 반환

2> Date 객체와 협정 세계시
   Date 객체는 UTC기준으로 동작
   협정 세계시(UTC) -> 협정 세계시는 시간의 시작을 1970년 1월 1일 0시 0분 0초를 기준으로 하며, 이 시작 시각을 UTC+0시라고 표현

3> 원하는 날짜로 Date 객체 생성하기
    Date 객체 생성자에 밀리초에 해당하는 인수를 전달하면, UTC+0부터 해당 인수만큼
    시간을 더한 Date 객체를 반환
    *Date 객체에서 날짜 요소 얻기 
    -> getFullYear / getMonth / getDate /getDay /getHours, getMinutes, getSeconds, getMilliseconds

    let date = new Date(2000, 9, 10);
    console.log(date.getFullYear()); 

4> Date 객체의 날짜 요소 수정하기
    setFullYear  / setMonth / setDate / setHours, setMinutes, setSeconds
    let date = new Date(2000, 9, 10);
    date.setDate(11);
    console.log(date); 

5> Date 객체 출력하기
    toString -> 현재 저장된 시간을 문자열로 반환
    toDateString -> 시간 제외 낧짜만 출력
    toLocaleString, toLocaleDateString -> 현지화된 날짜와 시간 반환 (= Date 객체에 있는 날짜와 시간을, 현재 우리가 속한 시간대에 맞게 변환해 출력)
    
6> Date 객체 응용하기
    n 월씩 이동
    function moveMonth(date, moveMonth) { 
        const curTimestamp = date.getTime(); 
        const curMonth = date.getMonth(); 

        const resDate = new Date(curTimestamp); 
        resDate.setMonth(curMonth + moveMonth); 

        return resDate;
        }
    
    해당 날짜만 필터링

9. 비동기 처리
비동기 처리시 오래 걸리는 작업을 끝날때까지 기다리지않고 다음 작업 수행이 가능함.
    1> 동기와 비동기
        동기: 코드를 작성한 '순서대로 순차적으로' 실행하는 것 / 자바스크립트에서 기본적인 동작 방식
        비동기: 특정 작업을 다른 작업과 관계없이 '독립적'으로 동작하게 만드는 것
        
        setTimeout > 비동기적으로 동작하는 자바스크립트의 내장 함수로 time만큼 기다렸다가 출력할 수 있음

    2> 콜백 함수로 비동기 처리
        코백 함수의 반환값과 함수 setTimeout의 반환값은 무관하다는 것을 명심해야 함.

    3> 프로미스 객체를 이용해 비동기 처리
        프로미스는 특수한 목적을 위해 기능이 여럿 추가된 자바스크립트 내장 객체
        활용목적은 비동기 처리이며 콜백 함수 이용보다 더 쉬움
        진행단계:
         대기(Pending)
         성공(Fulfilled)
         실패(Rejected)
        
        프로미스 객체 생성시 인수는 실행함수가 됨. 이때 실행함수는 resolve,reject 두가지 매개변수 제공받음, 프로미스 객체에는  then 메서드가 있음. then메서드는 비동기 작업이 아닌 곳에서 결과값 이용시 사용


        프로미스의 then과 catch 메서드 상ㅇ으로 작업의 실패성공여부에따라 실행할 콜백 함수 별도 지정 가능