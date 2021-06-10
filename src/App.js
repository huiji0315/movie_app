import React from 'react';
// 이것을 하지 않으면 react가 jsx로 쓰인 이것을 commponent라고 이해하지 못한다.

function Food({ name, picture }) {
  return <div>
    <h2>I like {name}</h2>
    <img src={picture}/>
  </div>
} // 동적 데이터가 있는 component

const foodILike = [
  {
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function App() {
  return <div>
    {foodILike.map(dish => (
      <Food name={dish.name} picture={dish.image}/>
    ))}
  </div>
}
// {}로 표현하면 javascript로 인식한다. {} 없으면 그냥 text로 인식한다.
// dish는 array의 각 요소(object)
// map은 function을 취해서 그 function을 array의 각 item에 적용한 후,
// 해당 function이 적용된 array를 반환한다.

export default App;
// component는 HTML을 반환하는 함수다.
// JSX란 Javascript 안의 HTML -> Component를 만들고 어떻게 사용하는지에 대한 것