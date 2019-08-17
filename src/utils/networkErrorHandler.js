export default function networkErrorHandler(TAG, error, route) {
    console.log(TAG, route, error);
    if (error.isAxiosError) {
        if (error.response) {
            throw `Error ${error.response.status},  ${error.response.data.message}`;
        }
        if (error.message.includes('Network Error')) {
            throw 'Network Error. Make sure you entered the url correctly. Check your internet connection.';
        }
    } else {
        throw `Internal error, ${error}`;
    }
}
