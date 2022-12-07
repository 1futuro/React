import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component{ 
	state = {
		isLoading : true, // 어떤 데이터를 처음 가져올 때 사용 cf) isFetching : 데이터를 다시 가져올 때 사용
		movies : [],
	};

	getMovies = async () => { // async : 자바스크립트에게 getMovies() 함수는 시간이 필요하고
		// const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json'); // await : axios.get() 의 실행을 기다려달라고 말하는 것
		// console.log(movies.data.data.movies);
		const {
			data : {
				data : { movies }
			},
		} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
		console.log(movies);
		// this.setState({ movies : movies }) // 첫번째 movies : state, 두번째 : 구조분해할당으로 얻은 데이터가 있는 변수
		this.setState({ movies, isLoading: false }); // 객체의 키와 대입할 변수의 이름이 같으면 위를 아래와 같이 축약 가능
	};

	componentDidMount(){
		// 영화 데이터 로딩 완료되면
		// setTimeout (() => {
		// 	this.setState({ isLoading : false });
		// }, 6000);
		this.getMovies();
	}

	render(){
		const { isLoading, movies } = this.state;
		return (		
			<section className="loader">
				{isLoading ? (
					<div className="loader">
						<span className="loader__text">Loading</span>
					</div>
				) : (
					<div className ="movies">
						{movies.map(movie => (
							<Movie 
								key={movie.id}
								id={movie.id}
								year={movie.year}
								title ={movie.title}
								summary ={movie.summary}
								poster={movie.medium_cover_image}
								genres={movie.genres}
								rating={movie.rating}
							/>
						))}
					</div>
				)}
			</section>
		);
	}
}

export default Home;
