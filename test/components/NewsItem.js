import React from "react";
import {shallow} from "enzyme";
import assert from "assert";
import configureStore from "redux-mock-store";
import NewsItem from "../../src/components/NewsItem";

// unit tests for NewsItem component
describe('NewsItem component', () => {
    describe('render', ()=> {
        const mockStore = configureStore([]);
        it('should render component', () => {
            const store = mockStore({
                news: {
                    active: 'all'
                }
            }, []);
            // test news props
            const newsProps = {
                author: "Mark Walton",
                description: "Overclocked i7, two GTX 1080s, 64GB RAM, Raid 0 NVMe, and a suitcase to carry it all.",
                publishedAt: "2017-07-13T13:00:50Z",
                title: "Asus ROG GX800VH review: A ludicrous liquid-cooled $6,000-plus laptop",
                url: "https://arstechnica.com/gadgets/2017/07/asus-rog-gx800vh-review/",
                urlToImage: "https://cdn.arstechnica.net/wp-content/uploads/2017/07/DSC02723-760x380.jpg",
                favorite: true,
            };

            const wrapper = shallow(<NewsItem store={store} {...newsProps}/>);
            assert.equal(wrapper.dive().find('.news-item').length, 1);
            assert.equal(wrapper.dive().find('.description').length, 1);
            assert.equal(wrapper.dive().find('.meta').length, 1);
            assert.equal(wrapper.dive().find('img').length, 1);
            assert.equal(wrapper.dive().find('.title').length, 1);
            assert.equal(wrapper.dive().find('.glyphicon-star').length, 1);

        })
    })
})
