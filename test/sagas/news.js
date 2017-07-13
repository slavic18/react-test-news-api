import assert from "assert";
import {call, put} from "redux-saga/effects";
import {newsFetchList} from "../../src/sagas/news";
import Api from "../../src/api/index";
// unit test for news saga
describe('News saga', () => {

    describe('newsFetchList()', ()=> {
        const generator = newsFetchList({source: 'bild'});

        it('should return the Api.getArticles call', ()=> {
            assert.deepEqual(generator.next().value, call(Api.getArticles, 'bild'));
        });

        it('should return the POPULATE_NEWS action', ()=> {
            assert.deepEqual(generator.next().value, put({type: 'POPULATE_NEWS', articles: undefined}))
        });
        it('should be finished', () => {
            assert.equal(generator.next().done, true);
        });
    });
});