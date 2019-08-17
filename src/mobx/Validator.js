const TAG = '~Validator.js~';

async function validateArticles(articles) {
    if (articles) {
        let i = 0;

        const response = articles
            .filter(item => {
                return item.title && item.shortDescription && item.description && item.date && item.imageUrl
            })
            .map(item => {
                item.title = item.title.replace(/<\/?[^>]+>/g, '');
                item.shortDescription = item.shortDescription.replace(/<\/?[^>]+>/g, '');
                item.description = item.description.replace(/<\/?[^>]+>/g, '');
                item.imageUrl = item.imageUrl.replace(/<\/?[^>]+>/g, '');
                if(item.link) {
                    pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
                    if (!pattern.test(item.link)) {
                        item.link=null;
                    }
                }
                item.date = item.date.replace(/<\/?[^>]+>/g, '');
                return { ...item, id: '' + i++ }
            });
        return response;
    }
}

export default {
    validateArticles
};
