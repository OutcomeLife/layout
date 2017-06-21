import axios from 'axios';

export default function getProperties() {
    return axios.get("/genny.properties.json");
}

// export default { getProperties };