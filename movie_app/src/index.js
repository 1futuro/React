import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// import reportWebVitals from './reportWebVitals';

//App 컴포넌트를 index.html의 아이디가 root인 엘리먼트에 그린다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App /> 

);

// reportWebVitals();
