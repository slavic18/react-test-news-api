import {call, put} from "redux-saga/effects";
import Api from "../api/index";

// fetch the user's list
export function* newsFetchList(action) {
    // call the api to get the users list
    if (action.source) {
        const articles = yield call(Api.getArticles, action.source);
        // save the users in state
        yield put({
            type: 'POPULATE_NEWS',
            articles: articles,
        });
    }

}