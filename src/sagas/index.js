import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { newsFetchList} from "./news";

// main saga generators
export function* sagas() {
    yield [
        fork(takeLatest, 'FETCH_NEWS', newsFetchList),
    ];
}
