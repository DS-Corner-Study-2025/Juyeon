5.구조 분해 할당
    1> 배열
    할당할 변수의 개수가 배열의 길이보다 많아도 오류가 나지 않음
    다만 배열의 길이를 넘는 변수 = undefined / undefined는 오류 일으킬 수 있음

    let arr =[1,2,3];

    let one =arr[0];
    let two =arr[1];
    let three =arr[2];

    console.log(one,two,three);
    
    2>객체
    프로퍼타의 value를 변수에 할당
    let person = {
        name: "김덕성",
        age: 25,
        location: "서울"
    };

    let { name, age, location } = person;

    console.log(name, age, location);

    3>함수의 매개변수가 객체
    객체 프로퍼티를 매개변수로...

    구조 분해 할당과 동시에 변수 이름변경도 가능
    function func({ name: n, age: a, location: l }) {
        console.log(n, a, l);
    }

    let person = {
        name: "유기현",
        age: 32,
        location: "경기도"
    };

    func(person);

6. 스프레드 연산자와 rest 매개변수
    1> 스프레드 연산자
    반복이 가능한 객체에서 값을 개별 요소로 분리
    이때 개별 요소로 분리된 값을 다시 배열로 묶는게 rest 매개변수
    
    spread 연산자 -> ... 이 전개 연산자
    : 배열, 문자열, 객체 등 반복 가능한 객체의 값 개별 요소 분리
        1> 배열
            let arrA=[1,2,3];
            let arrB=[...arrA,4,5,6];
        
        2> 객체
            let objA={
                a:1
                b:2
            };
            let objB={
                ...objA,
                c:3
                d:4
            };
    
   2> rest 매개변수
   나머지 매개변수 , 기호는 스프레드 연산자와 같음
   스프레드 연산자는 배열이나 객체처럼 반복 가능한 값을 개별 요소로 분리하지만, rest 매개변수는 반대로 개별요소르를 배열로 묶음
   function func(...rest) {
        console.log(rest);
    }

    func(1, 2, 3, 4); 

7. 배열과 메서드
    1> 요소의 추가 및 삭제 메서드
        깃 명령어와 비슷 ? 
        push / pop 
        shift / unshift > 느림
        slice > 원본 배열은 수정 x
        concat
    2> 순회 메서드
        배열 순회 -> 반복문 이용이 많음
        forEach
        :요소에 순서대로 접근, 특정 동작 수행
        함수 호출과정에서 인수로 전달되는 함수 '콜백함수' -> item / idx / arr
    3> 탐색 메서드
        배열에서 특정 조건 만족하는 요소를 찾아내는 행위
        1> indexOf
            배열에서 찾으려는 요소 인덱스 반환
            indexOf(item,fromIndex)
            item : 찾을것
            fromIndex : 탐색 시작할 인덱스 번호 / 생략 간으하나 생략시 0번부터 탐색 시작
            *찾는게 없거나 fromIndex값이 배열의 길이보4다 크거나 같은 경우에도 -1 반환
        2> includes
            배열에 특정 요소가 있는지 판별 (true, false)
            arr.includes(item, fromIndex)
        3> findIndex
            배열에서 찾으려는 요소의 인덱스 번호 찾아 반환
            arr.findIndex( callback(item, index, array) );
            indexOf와 달리 인수로 콜백 함수 전달 ->  이 함수 = 판별 함수
            판별 함수 ->  item / index / array 3개의 매개변수로 판별식 작성
            function determine(item, idx, arr) { 
                if (item % 2 === 0) {
                    return true;
                } else {
                    return false;
                }
            }

            let arr = [1, 3, 5, 6, 8];
            let index = arr.findIndex(determine); 

            console.log(index); 

            간결하게 작성시
            let arr = [1, 3, 5, 6, 8];
            let index = arr.findIndex((item) =>
                item % 2 === 0 ? true : false
            );

            console.log(index); 

            *indexOf는 엄격한 비교 연산자 ===을 사용해 객체 자료형을 찾아내기 어렵지만 findIndex는 판별 함수를 이용해 배열에서 조건과 일치하는 객체 요소 찾음
        4> find
            findIndex처럼 인수로 판별 함수를 전달하고, 배열에서 이를 만족하는 요소를 찾음 / findIndex와 다르게 인덱스가 아닌 요소 반환
        5> filter
            filter 메서드는 배열에서 조건을 만족하는 요소만 모아 새로운 배열로 반환하는 메서드

    4> 변형 메서드
        배열을 변형하거나 요소를 재정렬하는 메서드
            1> map
            배열 각각의 요소에 대한 함수 호출 결과를 모아 새 배열을 만들어 반환

            let arr = [
                { name: "이종원", hobby: "축구" },
                { name: "이정환", hobby: "영화" },
                { name: "신다민", hobby: "축구" },
                { name: "김효빈", hobby: "노래" }
                ];

            let newArr = arr.map((item) => item.name);

            console.log(newArr);

            위와같이 map메서드로 객체를 저장하는 배여을 다른 형태로 구성 가능 

            2> sort
            배열 요소를 정렬할 때 사용
            하나의 콜백 함수를 인수로 전달, 이 함수는 비교 함수로 사용되는데 필수 사항은 아님
            비교 함수를 생략시 사전 순, 오름차순으로 정렬

            3> join
            배열 요소를 모두 연결해 ㅎ나의 문자열로 반환
            분리 기호로 사용하는 구분자(separator)를 인수로 전달, 필수는 아님 / 생략시 , 사용

            4> reduce
            배열 요소를 모두 순회하면서 인수로 제공한 함수를 실행하고, 단 하나의 결괏값만 반환
             map 메서드와 유사하지만 하나의 결과만을 반환하는 것이 차이



