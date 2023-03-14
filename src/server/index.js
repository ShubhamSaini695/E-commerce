import axios from "axios";

export function getAPI(url) {
    return axios.get("http://localhost:3000" + url)
}
