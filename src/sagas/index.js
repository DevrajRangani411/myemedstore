import { all } from "redux-saga/effects";
import blogSagas from "./blog";
import contactUsSaga from './contactUs';
import portfolioSaga from './portfolio';
import aboutUsSaga from './aboutUs';
import homeSaga from './home';

export default function* rootSaga(getState) {
    yield all([
        blogSagas(),
        contactUsSaga(),
        portfolioSaga(),
        aboutUsSaga(),
        homeSaga()
    ]);
}



