const TAG = '~Validator.js~';

async function validateArticles(articles) {
    if (articles) {
        let i = 0;

        const response = articles
            .filter(item => {
                return item.title && item.shortDescription && item.description && item.date
            })
            .map(item => {
                item.title = item.title.replace(/<\/?[^>]+>/g, '');
                item.shortDescription = item.shortDescription.replace(/<\/?[^>]+>/g, '');
                item.description = item.description.replace(/<\/?[^>]+>/g, '');
                return { ...item, id: '' + i++ }
            });
        return response;
    }
}

export default validateArticles;
