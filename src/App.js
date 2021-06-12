import React from 'react';
import { HashRouter, Route } from 'react-router-dom'
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return <HashRouter>
    <Route path="/" exact={true} component={Home} />
    <Route path="/about" component={About} />
  </HashRouter>
}// path로 가서 About 컴포넌트를 보여달라.

export default App;
// router = simple react component
// 라우터는 url을 가져다가 확인하고, 우리가 라우터에게 무엇을 명령했느냐에 따라 해당 컴포넌트로 이동한다.
// http://localhost:3000/movie_app#/about -> url을 이용해서 path를 지정할 수 있다.
// 라우터가 동작하는 방식(url 앞부분만 맞아도 rendering함)에 의해서 2개 이상의 컴포넌트가 한 화면에 동시에 렌더링 될 수 있다는 문제가 있다.
// ex) / 와 /about 에서 /에서는 Home을 /about에서는 Home과 About 모두를 렌더링한다.
// -> exact={true}를 추가하여 정확히 이거아니면 렌더링 하지 않도록 한다.