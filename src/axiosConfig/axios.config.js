import axios from "axios";

const instance = axios.create({
    baseURL: 'https://testapp-e6e70-default-rtdb.firebaseio.com',
});

export default instance;
