import logo from '../assets/icons/unidriveLogo.png';

export const OpeningPage = () => {
	const handleClick = event => {
		event.preventDefault();
	};
	return (
		<div
			onClick={handleClick}
			style={{
				backgroundImage: `url(${logo})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'top-center',
				height: '100vh',
			}}
		></div>
	);
};
