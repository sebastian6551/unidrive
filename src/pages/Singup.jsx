import { PreRegister } from "../components/PreRegister";
import { Register } from "../components/Register";
import { Register2 } from "../components/Register2";
import { RegisterVehicle } from "../components/RegisterVehicle";
import { useContext } from "react";
import { UserContext } from '../services/UserContext'

export const SingUp = () => {
    const { step } = useContext(UserContext);

    switch (step) {
        case 1:
            return <PreRegister />
        case 2:
            return <Register />
        case 3:
            return <Register2 />
        case 4:
            return <RegisterVehicle />
        default:
    }
}