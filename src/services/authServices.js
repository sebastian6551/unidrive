const baseUrl = "http://localhost:3000/"

/**
 * request to login
 * @param {String} email 
 * @param {String} password 
 * @param {String} type 
 * @returns json
 */
const login = async (email, password, type) => {
    const comp = type + "/login";
    const data = {
        email,
        password
    }
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
        .then(res => res.json())
        .then(res => {
            if (res.jwt) {
                // temp localStorage is not secure
                localStorage.setItem("jwt", res.jwt)
                return res
            }
        })
};

export const authService = {
    login
}
