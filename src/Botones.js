import React, { useContext } from 'react';
import MyContext from './context';

const Saludo = () => {
	const valueFromContext = useContext(MyContext);
	return (
		<div>
			<div>
				<button onClick={() => valueFromContext[1]('spanish')}>Español</button>
				<button onClick={() => valueFromContext[1]('english')}>Inglés</button>
			</div>
		</div>
	);
};

export default Saludo;
