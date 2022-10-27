const baseUrl = "http://localhost:3000/admin/";

const getHome = () => {
    return fetch(baseUrl + "home");
};

const getSettings = () => {
    return fetch(baseUrl + "settings");
};

export const UserService = {
    getHome,
    getSettings
}
