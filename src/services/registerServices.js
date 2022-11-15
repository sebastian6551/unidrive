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

const createVehicle = async (email) => {
    await fetch(baseUrl + "/rider/getuser", {
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(email)
    })
    .then(res => {
        if(res.status === 201) {
            alert("cracion vehiculo ok")
        }
    })
}

const RegisterServices = {
    createUser,
    createVehicle
}

export default RegisterServices;