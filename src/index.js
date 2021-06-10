import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// <App />이 component의 형태다.
// react는 component를 사용해서 HTML처럼 작성하려는 경우에 필요하다.
// javascript와 HTML 사이의 이런 조합을 jsx라고 부른다.

// react application은 하나의 component만(App)을 rendering 해야한다.