import React from 'react' 

class App extends React.Component{ // 리액트가 제공하는 Component 클래스 상속 -> 클래형 컴포넌트의 기본 뼈대 
// React.Component 클래스의 기능을 추가한 App 클래스
	
	componentWillUnmount(){
		console.log('Goodbye, cruel world');
	}

	componentDidUpdate() {
		console.log('I just updated');
	}

	componentDidMount() {
		console.log('component rendered');
	}

	constructor(props){
		super(props);
		console.log('hello');
	}

	state = { // 객체 형태의 데이터
		count : 0,
	};
	
	add = () => {
		// this.state.count = 1; // state 직접 변경 불가능
		// this.setState({ count : this.state.count + 1}); // 성능 측면에서 좋지 않음
		this.setState(current => ({ // current에는 현재 state가 넘어옴
			count : current.count + 1,
		}));
	}

	minus = () => {
		// this.state.count = -1; // state 직접 변경 불가능
		// this.setState({ count : this.state.count -1 });
		this.setState(current => ({
			count : current.count -1,
		}));
	}

	render(){ // 우리가 직접 실행하지 않아도 실행되는 함수
		console.log('Im rendering');
		return (
		<div>
			<h1>The number is : {this.state.count}</h1> 
			{/* this.state : 현재 클래스에 선언한 state를 의미
			this.state.count : 현재 클래스에 선언한 state의 count 키 값을 의미 */}
			<button onClick={this.add}>Add</button>
			<button onClick={this.minus}>Minus</button>
		</div>
		);
	}
}

export default App;
