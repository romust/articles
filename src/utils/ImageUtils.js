import { Image, Dimensions } from 'react-native';

async function getSize(url){
    let result;
    await Image.getSize(url, (width, height) => {
        const ratio = height / width;
        const scaleWidth = Dimensions.get('window').width;
        const scaleHeight = scaleWidth * ratio;
        result = { width: scaleWidth, height: scaleHeight }
    }, (error) => {
        result = { width: 0, height: 0 }
    });
    return result;
}

export default {getSize};