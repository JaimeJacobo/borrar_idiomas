import React, { useContext } from 'react';
import MyContext from './context';
import texts from './texts.json';

const Saludo = () => {
	const valueFromContext = useContext(MyContext);
	return (
		<div>
			<h1>{texts[valueFromContext[0]].saludo}</h1>
		</div>
	);
};

export default Saludo;
