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
        if (this.source) {
            const response = await NetworkRequests.getFeed(this.source);
            console.log(TAG, this.source);
            let i = -1;
            const articles = response.data.feed.article.map(item => {
                i++;
                item.title = item.title.replace(/<\/?[^>]+>/g, '');
                item.shortDescription = item.shortDescription.replace(/<\/?[^>]+>/g, '');
                item.description = item.description.replace(/<\/?[^>]+>/g, '');
                return { ...item, id: '' + i }
            });
            articles.sort(this.compare);
            runInAction(() => {
                this.articles = articles;
            });
        } else {
            runInAction(() => {
                this.articles = null;
            });
        }

    }

    compare = (a, b) => {
        let comparison = 0;
        if (a.date < b.date) {
          comparison = 1;
        } else if (a.date > b.date) {
          comparison = -1;
        }
        return comparison;
    }
}
const Store = new ObservableStore();

export default Store;