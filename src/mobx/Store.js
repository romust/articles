import { action, observable, runInAction } from 'mobx';
import NetworkRequests from './NetworkRequests';

const TAG = '~Store.js~';

class ObservableStore {
    // @observable.shallow orders = [];
    @observable source = null;
    @observable articles = null;

    @action async setSource(source) {
        runInAction(() => {
            this.source = source;
        });
    }

    @action async getFeed() {
        const response = await NetworkRequests.getFeed(this.source);
        let i = 0;
        const articles = response.data.feed.article.map(item => {
            i++;
            item.title = item.title.replace(/<\/?[^>]+>/g,'');
            item.shortDescription = item.shortDescription.replace(/<\/?[^>]+>/g,'');
            return { ...item, id: '' + i }
        });
        runInAction(() => {
            this.articles = articles;
        });
    }
}
const Store = new ObservableStore();

export default Store;