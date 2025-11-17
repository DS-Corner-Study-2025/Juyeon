#훅(hooks)
    함수 컴포넌트의 state 사용불가 / LifeStyle에 따른 기능 구현 불가 문제를 해결해 클래스 컴포넌트 처럼 사용하기위해 나온 기능
    갈고리를 걸다..

    훅은  use로 시작 (use로 시작함으로써 훅임을 알림)

    useState()
    -> state를 사용하기 위한 Hook
    const [변수명, set함수명] = useState(초기값);

    useEffect()
    -> side effect 효과, 영향 를 실행 할 수 있게하는 Hook
    useEffect(이펙트 함수, 의존성 배열);
    *의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
    이때 의존성배열에 빈 배열을 넣으면 마운트와 언마운트 한번씩만 실행

    useMemo()
    -> Meomoized value를 리턴
       Memoization ; 최적화위한,,,

    const memoizedValue = useMemo{
        () => {
            //연산량이 높은 작업을 수행하여 결과 반환
            return computeExpensiveValue(의존성 변수1, 의존성 변수2);
        },
        [의존성 변수1, 의존성 변수2] //의존성 배열이 빈배열일 경우, 컴포넌트 마운트시에만 호출
    };

    useCallback()
    -> useMemo()와 비슷
    const memoizedCallback = useCallback{
        () => {
            doSomething(의존성 변수1, 의존성 변수2);
        },
        [의존성 변수1, 의존성 변수2]
    };

    ** useCallack(함수, 의존성 배열);
       useMemo( () => 함수, 의존성 배열); 동일한 역할

    useRef()
    -> 레퍼런스를 사용하기위한 Hook 
    특정 컴포넌트에 접근할 수 있는 객체
    const refContainer = useRef(초깃값);
    내부의 데이터가 변경되었을 때, 별도로 알리지 않는다

    Callback ref
    -> 변화 알기위해,,

    Hook의 규칙
    ->무조건 최상위 레벨에서만 호출해야 함.
    컴포넌트 렌더링될 때마다 같은 순서로 호출
    
    Custom Hook
    -> 반복되는 로직 재사용
    이름이 use로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수

    여러개의 컴포넌트에서 하나의 customhook사용시 컴포넌트 내부에 있는 모든 state ,effect는 분리 되어있음, 각 호출에 대해 분리된 State !!


