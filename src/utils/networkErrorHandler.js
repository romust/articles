import I18n from '../strings/I18n';

export default function networkErrorHandler(TAG, error, route) {
    console.log(TAG, route, error);
    if (error.isAxiosError) {
        if (error.response) {
            throw `Error ${error.response.status},  ${error.response.data.message}`;
        }
        if (error.message.includes('Network Error')) {
            throw I18n.t('networkError');
        }
    } else {
        throw `Internal error, ${error}`;
    }
}
