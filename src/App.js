import './App.css';
import React from 'react';
import Hello from './components/Hello';
import Bye from './components/Bye';
import Greet from './components/Greet';
function App() {

  // const $h2 = React.createElement('h2', null, '방가방가햄토리');
  const $h2 = <h2>방가방가햄토릐</h2>

  // jsx 규칙
  // 1. return안에있는 태그는 반드시 하나의 태그로 묶여야 함.
  // 2. 빈 태그는 반드시 />로 마감
  // 3. 태그의 class 속성은 자바스크립트 class와 겹쳐서 className으로 표기
  // 4. 의미없는 부모는 <React.Fragment>로 묶으면 알아서 사라짐 <>로 축약가능
  // 5. 변수값이나 함수를 출력할 때는 {}로 감싸면 됨
  const hello = '안녕안녕';


  return (

    <>
      <Hello />
      <Bye/>
      <Greet/>
    </>
  );
}

export default App;
