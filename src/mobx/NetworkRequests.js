import axios from 'axios';
import networkErrorHandler from '../utils/networkErrorHandler';

const TAG = '~NetworkRequest.js~';

async function getFeed(source) {
    let response;
    try {
        response = await axios.get(source);
        console.log(TAG, 'getFeed response.data: ', response.data);
    } catch (error) {
        networkErrorHandler(TAG, error, `get ${source}`);
    }

    return response;
}

export default {
    getFeed
};
