import { useState, createContext } from "react";
import { PreRegister } from "../components/PreRegister";
import { Register } from "../components/Register";
import { Register2 } from "../components/Register2";

export const UserContext = createContext();
export const SingUp = () => {

    const [typeUser, SetTypeUser] = useState('');
    const [step, setStep] = useState(1);
    const [userData, setData] = useState({});

    const prevStep = () => {
        setStep(step - 1)
    }

    const nextStep = () => {
        setStep(step + 1)
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
                    <UserContext.Provider value={{ nextStep, prevStep, handleChange }}>
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
        default:
    }
}