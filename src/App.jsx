import { Route, Routes } from 'react-router-dom';
import { SingUp } from './pages/Singup';
import Login from './pages/Login';
import { Landing } from './pages/Landing';
import { ProtectedRoute } from './hooks/ProtectedRoutes.jsx';
import { AuthContextProvider } from './hooks/AuthContext';
import { HomeBidder } from './pages/HomeBidder';
import { CreateTripDriver } from './components/CreateTripDriver';
import { HomeRider } from './pages/HomeRider';
import { HistorialRider } from './pages/HistorialRider';
import { HistorialBidder } from './pages/HistorialBidder';
import { UserContextProvider } from './hooks/UserContext';
import { NotificationBidder } from './pages/NotificationBidder';
import { NotificationRider } from './pages/NotificationRider';
import { UpcomingTripsBidder } from './pages/UpcomingTripsBidder';
import { UpcomingTripsRider } from './pages/UpcomingTripsRider';
import { ConfirmProvider } from 'material-ui-confirm';

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
					path='/rider/notification'
					element={
						<ProtectedRoute accessBy='authenticated'>
							<NotificationRider />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/rider/upcomingtrips'
					element={
						<ProtectedRoute accessBy='authenticated'>
							<UpcomingTripsRider />
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
					path='/bidder/notification'
					element={
						<ProtectedRoute accessBy='authenticated'>
							<NotificationBidder />
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/bidder/upcomingtrips'
					element={
						<ProtectedRoute accessBy='authenticated'>
							<ConfirmProvider>
								<UpcomingTripsBidder />
							</ConfirmProvider>
						</ProtectedRoute>
					}
				></Route>
				<Route
					path='/bidder/history'
					element={
						<ProtectedRoute accessBy='authenticated'>
							<HistorialBidder />
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
