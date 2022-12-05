import { Route, Routes } from 'react-router-dom';
import { SingUp } from './pages/Singup';
import Login from './pages/Login';
import { Landing } from './pages/Landing';
import { ProtectedRoute } from './services/ProtectedRoutes.jsx';
import { AuthContextProvider } from './services/AuthContext';
import { HomeBidder } from './pages/HomeBidder';
import { CreateTripDriver } from './components/CreateTripDriver';
import { HomeRider } from './pages/HomeRider';
import { HistorialRider } from './pages/HistorialRider';
import { UserContextProvider } from './services/UserContext';

function App() {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path='/' element={<Landing />}></Route>
				<Route
					path='/login'
					element={
						<ProtectedRoute accessBy='non-authenticated'>
							<Login />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/rider'
					element={
						<ProtectedRoute accessBy='authenticated'>
							<HomeRider />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/rider/history'
					element={
						<ProtectedRoute accessBy='authenticated'>
							<HistorialRider />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/bidder'
					element={
						<ProtectedRoute accessBy='authenticated'>
							<HomeBidder />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/bidder/createTrip'
					element={
						<ProtectedRoute accessBy='authenticated'>
							<CreateTripDriver />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/SingUp'
					element={
						<ProtectedRoute accessBy='non-authenticated'>
							<UserContextProvider>
								<SingUp />
							</UserContextProvider>
						</ProtectedRoute>
					}
				></Route>
			</Routes>
		</AuthContextProvider>
	);
}

export default App;
