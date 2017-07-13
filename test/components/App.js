import React from "react";
import {shallow} from "enzyme";
import assert from "assert";
import configureStore from 'redux-mock-store';

import App from "../../src/components/App";

// unit tests for App component
describe('App component', () => {
    describe('render', ()=> {
        const mockStore = configureStore([]);
        it('should render component', () => {
            const store = mockStore({
                news: {}
            }, []);
            const wrapper = shallow(<App store={store} />);
            assert.equal(wrapper.dive().find('.container').length, 1);
            assert.equal(wrapper.dive().find('.news-list').length, 1);
        })
    })
})
