import {CardComponent} from "./CardComponent";
import { AppBarComponent } from "./AppBarComponent";
import { RedBoxInterfaceTitleComponent } from "./RedBoxInterfaceTitleComponent";
import './styles/upComingTripsDriver.css';
import logOutArrow from '../assets/icons/logOutArrow.png';
import AuthContext from '../services/AuthContext';
import { useContext } from 'react';


export const UpComingTripsDriver = () => {
  
    const { logout } = useContext(AuthContext);
    return (
    <div>
        <span className='spaceLeftForLogOut'>
				<button
					className='logOutArrow'
					title='Cerrar sesión'
					type='button'
					onClick={logout}
				>
					<img src={logOutArrow} />
				</button>
			</span>
        <div className="redBoxPosition">
            <RedBoxInterfaceTitleComponent title="Próximos viajes"/>
        </div>

        <div className="tripsContainer">
            <CardComponent day="Day" hour="hour" startingPoint="startingPoint" arrivalPoint="arrivalPoint"></CardComponent>
            <CardComponent day="Day" hour="hour" startingPoint="startingPoint" arrivalPoint="arrivalPoint"></CardComponent>
            <CardComponent day="Day" hour="hour" startingPoint="startingPoint" arrivalPoint="arrivalPoint"></CardComponent>
            <CardComponent day="Day" hour="hour" startingPoint="startingPoint" arrivalPoint="arrivalPoint"></CardComponent>
            <CardComponent day="Day" hour="hour" startingPoint="startingPoint" arrivalPoint="arrivalPoint"></CardComponent>
            <CardComponent day="Day" hour="hour" startingPoint="startingPoint" arrivalPoint="arrivalPoint"></CardComponent>
        </div>

        <div className="appBarPosition">
            <AppBarComponent/>
        </div>

    </div>
  )
}
