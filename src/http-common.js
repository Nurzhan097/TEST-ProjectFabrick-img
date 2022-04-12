import axios from "axios";
// import store from './store';

// Vue.prototype.$http = axios
var axios_ = axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        "Accept-Version": "v1",
        "Authorization": "Client-ID 5dwHnv9_wV-2SKF9KNntWLzFnwiAJW73RwpW33eG5P8",
    }
});

export default axios_;