import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const upHandler = () => {
        // useState 의 setter는 상태값을 업데이트 할 때
        // 렌더링 전까지 이전 상태값을 참조함

        // 해결방법: 함수형 업데이트를 사용
        setCount((prev) => {
            console.log("변경 이전값: ", prev);
            return prev + 1;
        });
        setCount((count) => count + 1);

        // 상태값의 변경은 실시간으로 일어나지 않는다.
        // 해결방법: useEffect 훅으로 해결 (배울예정)
        console.log('변경 이후값: ', count);
    };
    const downHandler = () => {
        setCount(count - 1);

    };

    return (
        <div>
            <h1>숫자 : {count}</h1>
            <button onClick={upHandler}>증가</button>
            <button onClick={downHandler}>감소</button>
        </div>
    );
};

export default Counter;
