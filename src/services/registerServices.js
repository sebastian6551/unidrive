const baseUrl = "http://localhost:3000/";

const createUser = async (data, typeUser) => {

    const comp = typeUser + "/create";
    console.log(baseUrl + comp)
    console.log(data)
    console.log(typeUser)

    return await fetch(baseUrl + comp, {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};

const RegisterServices = {
    createUser
}

export default RegisterServices;