export default function news(state = {}, action) {
    switch (action.type) {
        case 'POPULATE_NEWS':
            let articles = state.articles || [];
            if (action.articles) {
                articles = articles.concat(action.articles);
            }
            return Object.assign({}, state, {
                articles,
            });
            break;
        case 'SET_FAVORITE':
            var articles = state.articles || [];
            articles.map((item, key) => {
                if (item.title === action.title) {
                    articles[key] = Object.assign({}, articles[key], {favorite: !articles[key].favorite});
                }
            });
            articles = articles.slice();
            return Object.assign({}, state, {articles});
            break;
        case 'CHANGE_NEWS_TYPE':
            return Object.assign({}, state, {
                active: action.data
            });
            break;
        // initial state
        default:
            return state;
    }
}
