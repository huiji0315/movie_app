import React from 'react';
// 이것을 하지 않으면 react가 jsx로 쓰인 이것을 commponent라고 이해하지 못한다.

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];
// react의 모든 element들은 다르게 보일 필요가 있다.

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={name}/>
  </div>
} // 동적 데이터가 있는 component

function App() {
  return <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image}/>
    ))}
  </div>
}
// key prop은 Food로 전달되지 않는다. 
// Food 자체에서 사용하는 것이 아니라, 기본적으로 react 내부에서 사용하기 위함이다.


export default App;
// component는 HTML을 반환하는 함수다.
// JSX란 Javascript 안의 HTML -> Component를 만들고 어떻게 사용하는지에 대한 것