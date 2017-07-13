import assert from "assert";
import news from "../../src/reducers/news";

// unit test for news reducer
describe('News reducer', () => {

    describe('POPULATE_NEWS()', ()=> {
        it('should return news populated array element', () => {
            const state = {
                articles: []
            };

            const action = {
                type: 'POPULATE_NEWS',
                articles: [
                    {
                        title: 'test1',
                        description: 'test1 description'
                    },
                    {
                        title: 'test2',
                        description: 'test2 description'
                    }
                ]
            };
            const expected = {
                articles: [
                    {
                        title: 'test1',
                        description: 'test1 description'
                    },
                    {
                        title: 'test2',
                        description: 'test2 description'
                    }
                ]
            };
            assert.deepEqual(news(state, action), expected);
        })
    });


    describe('SET_FAVORITE()', ()=> {
        it('should toggle favorite options for news ', () => {
            const state = {
                articles: [
                    {
                        title: 'test1',
                        description: 'test1 description'
                    },
                    {
                        title: 'test2',
                        description: 'test2 description'
                    }
                ]
            };

            const action = {
                type: 'SET_FAVORITE',
                title: 'test1',
            };
            const expected = {
                articles: [
                    {
                        title: 'test1',
                        description: 'test1 description',
                        favorite: true,
                    },
                    {
                        title: 'test2',
                        description: 'test2 description'
                    }
                ]
            };
            assert.deepEqual(news(state, action), expected);
        });
    });

    describe('CHANGE_NEWS_TYPE()', ()=> {
        it('should change current news state ', () => {
            const state = {
                active: 'all',
            };

            const action = {
                type: 'CHANGE_NEWS_TYPE',
                data: 'favorites',
            };
            const expected = {
                active: 'favorites',
            };
            assert.deepEqual(news(state, action), expected);
        });
    });

});