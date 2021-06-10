import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id:2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id:3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id:4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id:5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];
// react의 모든 element들은 다르게 보일 필요가 있다.

function Food({ name, picture, rating }) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
} // 동적 데이터가 있는 component

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number // isRequired가 없으면 type만 체크
}
// propTypes로 반드시 작성해야 인식함
// 이밖에도 많은 것을 확인할 수 있음

function App() {
  return <div>
    {foodILike.map(dish => (
      <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
    ))}
  </div>
}
// Parent component로부터 전달받은 props가 우리가 예상한 props인지를 체크할 필요가 있다.
// -> npm i prop-types 설치
// -> npm i로 다시 update 후 npm start 해주기
// -> Food.propTypes에 체크할 propTypes 작성

export default App;
// component는 HTML을 반환하는 함수다.
// JSX란 Javascript 안의 HTML -> Component를 만들고 어떻게 사용하는지에 대한 것