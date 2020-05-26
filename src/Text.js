import React, { useContext } from 'react';
import MyContext from './context';
import texts from './texts.json';

const Text = () => {
	const valueFromContext = useContext(MyContext);
	return (
		<div>
			<p>{texts[valueFromContext[0]].text}</p>
		</div>
	);
};

export default Text;
