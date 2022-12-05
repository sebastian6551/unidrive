import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const baseUrl = 'http://localhost:3000/';
const AuthContext = createContext(undefined);

export const AuthContextProvider = ({ children }) => {
	const [typeUser, setTypeUser] = useState(() => {
		const typeUser = localStorage.getItem('typeUser');
		if (typeUser) {
			return typeUser;
		}
		return null;
	});
	const [user, setUser] = useState(() => {
		const userProfle = localStorage.getItem('userProfile');
		if (userProfle) {
			return userProfle;
		}
		return null;
	});

	const [token, setToken] = useState(() => {
		const token = localStorage.getItem('token');
		if (token) {
			return token;
		}
		return null;
	});

	const navigate = useNavigate();

	/**
	 * request to login
	 * @param {String} email
	 * @param {String} password
	 * @param {String} type
	 * @returns json
	 */
	const login = async data => {
		const comp = typeUser + '/login';
		console.log(comp);
		return await fetch(baseUrl + comp, {
			method: 'POST',
			mode: 'cors',
			cache: 'default',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then(res => res.json())
			.then(res => {
				if (res.jwt) {
					localStorage.setItem('token', res.jwt);
					localStorage.setItem('userProfile', JSON.stringify(res.user));
					localStorage.setItem('typeUser', typeUser);
					res.user.password = null;
					console.log(res.user);
					setToken(res.jwt);
					setUser(res.user);
					navigate('/' + typeUser);
				} else {
					alert(res.errors);
				}
			});
	};

	const logout = async () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userProfile');
		localStorage.removeItem('typeUser');
		setToken();
		setUser();
		setTypeUser();
		navigate('/');
	};

	return (
		<>
			<AuthContext.Provider
				value={{ token, login, logout, user, typeUser, setTypeUser }}
			>
				{children}
			</AuthContext.Provider>
		</>
	);
};

export default AuthContext;
