import React, { useState } from 'react';
import './App.css';
import MyContext from './context.js';
import Saludo from './Saludo';
import Botones from './Botones';
import Text from './Text';

function App() {
	const [ selectedLanguage, updateselectedLanguage ] = useState('spanish');

	return (
		<MyContext.Provider value={[ selectedLanguage, updateselectedLanguage ]}>
			<div className="App">
				<Botones />
				<Saludo />
				<Text />
			</div>
		</MyContext.Provider>
	);
}

export default App;
