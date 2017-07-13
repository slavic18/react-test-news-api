import React from "react";
import {shallow} from "enzyme";
import assert from "assert";
import configureStore from 'redux-mock-store';

import Menu from "../../src/components/Menu";

// unit tests for Menu component
describe('Menu component', () => {
    describe('render', ()=> {
        const mockStore = configureStore([]);
        it('should render component', () => {
            const store = mockStore({
                news: {
                    active: 'all'
                }
            }, []);
            const wrapper = shallow(<Menu store={store} />);
            assert.equal(wrapper.dive().find('.menu').length, 1);
            assert.equal(wrapper.dive().find('.btn-primary').length, 2);
            assert.equal(wrapper.dive().find('.btn-primary.active').length, 1);
        })
    })
})
