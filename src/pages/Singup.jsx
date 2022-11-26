import { useState, createContext } from "react";
import { PreRegister } from "../components/PreRegister";
import { Register } from "../components/Register";
import { Register2 } from "../components/Register2";
import { RegisterVehicle } from "../components/RegisterVehicle";

export const UserContext = createContext();
export const SingUp = () => {

    const [typeUser, SetTypeUser] = useState('');
    const [step, setStep] = useState(1);
    const [userData, setData] = useState({});

    const prevStep = () => {
        if(step === 4 && typeUser === "bidder") {
            setStep(step - 2)
        } else {
            setStep(step - 1)
        }
    }

    const nextStep = () => {
        if(step === 2 && typeUser === "bidder") {
            setStep(step + 2)
        } else {
            setStep(step + 1)
        }
    }

    const handleChange = input => {
        setData(input);
    }

    switch (step) {
        case 1:
            return (
                <>
                    <UserContext.Provider value={{ SetTypeUser, nextStep }}>
                        <PreRegister />
                    </UserContext.Provider>
                </>
            );
        case 2:
            return (
                <>
                    <UserContext.Provider value={{ nextStep, prevStep, handleChange, userData }}>
                        <Register />
                    </UserContext.Provider>
                </>
            );
        case 3:
            return (
                <>
                    <UserContext.Provider value={{ typeUser, prevStep, userData }}>
                        <Register2 />
                    </UserContext.Provider>
                </>
            );
        case 4:
            return (
                <>
                    <UserContext.Provider value={{ typeUser, prevStep, userData }}>
                        <RegisterVehicle />
                    </UserContext.Provider>
                </>
            );
        default:
    }
}