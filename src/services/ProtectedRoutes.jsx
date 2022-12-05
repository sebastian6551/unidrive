import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from './AuthContext.jsx';

export const ProtectedRoute = ({ children, accessBy }) => {
	const { token, typeUser } = useContext(AuthContext);

	if (accessBy === 'non-authenticated' && !token) {
		return children;
	} else if (accessBy === 'authenticated' && token) {
		return children;
	} else if (accessBy === 'non-authenticated' && token) {
		return <Navigate to={'/' + typeUser}></Navigate>;
	}
	return <Navigate to='/'></Navigate>;
};
