import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./components/DashBoard";
import Login from "./components/Login"
import { PreLogin } from './components/PreLogin';
import { ProtectedRoute } from "./services/ProtectedRoutes.jsx";
import { AuthContextProvider } from "./services/AuthContext";
// import { Register } from './components/Register';

function App() {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<PreLogin/>}></Route>
				<Route
					path="/login"
					element={
						<ProtectedRoute accessBy="non-authenticated">
							<Login />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path="/dash"
					element={
						<ProtectedRoute accessBy="authenticated">
							<DashBoard />
						</ProtectedRoute>
					}
				></Route>
			</Routes >
		</AuthContextProvider>
	);
}

export default App;

