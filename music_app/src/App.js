import React from 'react';
import './App.css';
import { HashRouter,Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
// import Homecopy from './pages/Home copy';
import Detail from './pages/Detail'

function App() {

	return (
		<HashRouter>
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/music-detail' element={<Detail />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
