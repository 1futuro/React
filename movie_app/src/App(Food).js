import React from 'react' // react 앱 실행 시 가장 먼저 나타날 화면 구성 해 주는 파일
// import Potato from './Potato' // ./는 같은 경로(폴더)라는 것을 의미
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){
	// console.log(props);
	// return <h1> I like {props.fav} </h1>
	// let {fav} = props;
	return (
	<div>
		<h2>I like {name}</h2>
		<h4>{rating}/5.0</h4>
		<img src ={picture} alt={name}/>
	</div> 
	);
}

const foodLike = [
	{	
		id : 1,
		name : 'coffee',
		image : 'https://www.collective.kr/wp-content/uploads/2021/12/coffee.jpg',
		rating : 5,
	},
	{
		id : 2,
		name : 'taco', 
		image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPeWQPQLoIgMAlOn6_9FTeOZen05Zt5I6X_Vt5ZTQEMumnmhCfKOiJZOxu3BzU1mQ8q4&usqp=CAU',
		rating : 4.9,
	},
];

// function renderFood(dish) { // map함수의 첫번째 인자로 전달할 renderFood() 함수 분리
// 	return <Food name={dish.name} picture={dish.image} />;
// }

// const renderFood = dish => <Food name={dish.name} picture={dish.image} /> // 화살표 함수 - 위와 같은 내용

function App() {
	return (
	<div> 
		{/* <Food fav="김밥" someting={true} papapa={['hello',1,2,3,4,true]} />  
		// fav -> favorite 의 줄임말  */}
		{/* 문자열이 아닌 true와 배열은 중괄호로 감싸서 전달*/}
		{/* <Food fav="coffee" /> */}
		
		{foodLike.map(dish =>
			(<Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>) //힘수의 첫번째 인자인 dish 에는 foodLike의 원소가 하나씩 넘어감
		)} 

		{/* {foodLike.map(renderFood)} */}
	</div>
	
	);
}

Food.propTypes = {
	name : PropTypes.string.isRequired,
	picture : PropTypes.string.isRequired,
	rating : PropTypes.number
};

export default App;
