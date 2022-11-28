import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./components/DashBoard";
import { SingUp } from "./pages/Singup"
import Login from "./components/Login"
// import { PreLogin } from './components/PreLogin';
import { ProtectedRoute } from "./services/ProtectedRoutes.jsx";
import { AuthContextProvider } from "./services/AuthContext";
import {HomeBidder} from "./pages/HomeBidder";
import {HomeRider} from "./pages/HomeRider";
import { TravelInformationComponent} from './components/TravelInformationComponent';

function App() {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<TravelInformationComponent typeOfTransport="tipo de transporte"/>}></Route>
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
					path="/SingUp"
					element={
						<ProtectedRoute accessBy="non-authenticated">
							<SingUp />								
						</ProtectedRoute>
					}>
				</Route>
			</Routes >
		</AuthContextProvider>
	);
}

export default App;

