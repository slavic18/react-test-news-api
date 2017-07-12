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
        // initial state
        default:
            return state;
    }
}
