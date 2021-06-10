import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state = {
    count: 0
  };

  add = () => {
    // this.setState({ count: this.state.count + 1 });
    // react에서 state를 set할 때, react에서 외부의 상태(state)에 의존하지 않는 것이 가장 좋다.
    this.setState(current => ({ count: current.count + 1 }));
  };
  minus = () => {
    // this.setState({ count: this.state.count - 1 });
    this.setState(current => ({ count: current.count - 1 }));
  };
  // javascript 함수 작성
  // react는 render function을 refresh하지 않는다.
  // == 매번 state의 상태를 변경할 때, react가 render function을 호출해서 바꿔주길 원한다.
  // -> setState function을 호출하면 react는 state를 refresh하고, render function을 새로운 state와 함께 다시 호출한다.
  // react는 virtualDOM을 갖고 있기 때문에 변경되는 부분만 빠르게 변경할 수 있고, 깜빡거리지도 않는다.
  // react component에서 사용하는 유일한 function은 render function이다.

  render() {
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  } // onClick은 react magic
}
// React.Component에서 class component 생성(state를 갖고 있음)
// -> class는 return이 없고 render method를 갖고 있다.
// * react는 자동적으로 모든 class component의 render method를 실행한다.
// state는 보통 동적데이터와 함께 작업할 때 만들어진다.
// -> 변하는 데이터(생겨났다가 사라졌다가)
// state = object 
// : component의 data를 넣을 공간이 있고, 이 data는 변한다.

export default App;