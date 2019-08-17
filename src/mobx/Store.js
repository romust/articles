import { action, observable, runInAction } from 'mobx';
import NetworkRequests from './NetworkRequests';
import Validator from './Validator';
import I18n from '../strings/I18n';

const TAG = '~Store.js~';

class ObservableStore {
    @observable source = null;
    @observable articles = null;

    @action async setSource(source) {
        runInAction(() => {
            this.source = source;
        });
    }

    @action async getFeed() {
        if (this.source) {
            try {
                const response = await NetworkRequests.getFeed(this.source);
                if (response.data.feed) {                    
                    const validateArticles = await Validator.validateArticles(response.data.feed.article);                    
                    validateArticles.sort(this.compare);
                    runInAction(() => {
                        this.articles = validateArticles;
                    });
                } else {
                    throw I18n.t('emptyLink')
                }
            } catch (err) {
                throw err
            }

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