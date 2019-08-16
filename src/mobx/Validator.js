const TAG = '~Validator.js~';

async function validateArticles(articles) {
    let i = -1;
    console.log(TAG, articles[0].title);
    const response = articles.map(item => {

        item.title = item.title.replace(/<\/?[^>]+>/g, '');
        item.shortDescription = item.shortDescription.replace(/<\/?[^>]+>/g, '');
        item.description = item.description.replace(/<\/?[^>]+>/g, '');

        return { ...item, id: '' + i++ }//, imageWidth: scaleWidth, imageHeight: scaleHeight
    });
    return response;
}

export default {
    validateArticles
};
