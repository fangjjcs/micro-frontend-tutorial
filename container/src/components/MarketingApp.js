import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
	const ref = useRef(null);
	const history = useHistory(); // in container , and it uses BrowserRouter

	useEffect(() => {
		const { onParentNavigate } = mount(
			ref.current, 
			{
				onNavigate: ({ pathname: nextPathName}) => {
					console.log(`The Conteiner Navigation ${nextPathName} in Marketing App.`);
					const { pathname } = history.location;
					if(pathname !== nextPathName) {
						history.push(nextPathName);
					}
				}}
		);

		history.listen(onParentNavigate);

	}, []);
	return <div ref={ref} />;

};
