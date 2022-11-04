import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./components/DashBoard";
import { Register } from "./components/Register"
import Login from "./components/Login"
import { PreLogin } from './components/PreLogin';
import { ProtectedRoute } from "./services/ProtectedRoutes.jsx";
import { AuthContextProvider } from "./services/AuthContext";

function App() {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<PreLogin />}></Route>
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
				<Route
					path="/register"
					element={
						<ProtectedRoute accessBy="non-authenticated">
							<Register />
						</ProtectedRoute>
					}>
				</Route>
			</Routes >
		</AuthContextProvider>
	);
}

export default App;

