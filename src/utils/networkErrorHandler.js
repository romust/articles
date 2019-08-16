export default function networkErrorHandler(TAG, error, route) {
    console.log(TAG, route, error);
    if (error.isAxiosError) {
        if (error.response) {
            throw `Error ${error.response.status},  ${error.response.data.message}`;
        }
        if (error.message.includes('Network Error')) {
            throw 'Network Error. Check your internet connection. Make sure you entered the url correctly';
        }
    } else {
        throw `Internal error, ${error}`;
    }
}
