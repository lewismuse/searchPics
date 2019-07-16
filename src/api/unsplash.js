import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        //put unsplash api auth after Client-ID
        Authorization: 'Client-ID '
    }
});
