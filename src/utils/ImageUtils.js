import { Image, Dimensions } from 'react-native';

async function getSize(url, set) {
    await Image.getSize(url, (width, height) => {
        const ratio = height / width;
        const scaleWidth = Dimensions.get('window').width;
        const scaleHeight = scaleWidth * ratio;
        set(scaleWidth, scaleHeight);
    }, (error) => {
        set(0, 0);
    });
}

export default { getSize };