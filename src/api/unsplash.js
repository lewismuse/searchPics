import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 59f9d0817059241bd1ef22ecbc0d7027b621b035bbac1a6887baaacbb334337f'
    }
});
