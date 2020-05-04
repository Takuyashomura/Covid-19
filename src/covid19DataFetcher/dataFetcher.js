import axios from 'axios';

const API_URL = 'https://api.covid19api.com/total/dayone/country/japan';

class dataFetcher {
    static async fetch(){
        const response = await axios.get(API_URL);
        return response.data;
    }
}

export default dataFetcher;