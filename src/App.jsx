import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./components/DashBoard";
import { Register } from "./components/Register"
import { Register2 } from "./components/Register2"
import { PreRegister } from "./components/PreRegister"
import Login from "./components/Login"
import { PreLogin } from './components/PreLogin';
import { ProtectedRoute } from "./services/ProtectedRoutes.jsx";
import { AuthContextProvider } from "./services/AuthContext";
import {HomeBidder} from "./pages/HomeBidder";
import {HomeRider} from "./pages/HomeRider";

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
				<Route
					path="/rider"
					element={
						<ProtectedRoute accessBy="authenticated">
							<HomeRider />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path="/bidder"
					element={
						<ProtectedRoute accessBy="authenticated">
							<HomeBidder />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path="/preregister"
					element={
						<ProtectedRoute accessBy="non-authenticated">
							<PreRegister />
						</ProtectedRoute>
					}>
				</Route>
				<Route
					path="/register"
					element={
						<ProtectedRoute accessBy="non-authenticated">
							<Register />
						</ProtectedRoute>
					}>
				</Route>
				<Route
					path="/register2"
					element={
						<ProtectedRoute accessBy="non-authenticated">
							<Register2 />
						</ProtectedRoute>
					}>
				</Route>
			</Routes >
		</AuthContextProvider>
	);
}

export default App;

