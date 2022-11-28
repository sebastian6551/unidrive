import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
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

    return (
        <>
            <UserContext.Provider value={{ typeUser, SetTypeUser, step, setStep, userData, 
                setData, prevStep, nextStep, handleChange}}>
                {children}
            </UserContext.Provider>
        </>
    );
}

export default UserContext;
