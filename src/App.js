import React from 'react';
// 이것을 하지 않으면 react가 jsx로 쓰인 이것을 commponent라고 이해하지 못한다.

function Food({ fav }) {
  // props.fav == {fav}
  return <h1>I like {fav}</h1>;
} // 동적 데이터가 있는 component

function App() {
  return <div>
    <h1>Hello!!</h1>
    <Food fav="kimchi" />
    {/* Parent -> Children Component
    : Food component에 
    fav라는 이름의 property를 
    kimchi라는 value로 준 것 */}
    <Food fav="ramen" />
    <Food fav="samgiopsal" />
    {/* jsx + props를 이용하여 재사용 
     component를 대문자로 시작해야 HTML element로 인식가능 */}
  </div>
}

export default App;
// component는 HTML을 반환하는 함수다.
// JSX란 Javascript 안의 HTML -> Component를 만들고 어떻게 사용하는지에 대한 것