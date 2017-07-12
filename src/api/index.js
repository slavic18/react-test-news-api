export default class Api {
    static getArticles(source) {

        return fetch('https://newsapi.org/v1/articles?source=' + source + '&sortBy=latest&apiKey=50917f2f33684fc9aefe51182b99d04a')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                return json.status == 'ok' && json.articles ? json.articles : [];
            }.bind(this)).catch(function (err) {
                console.log('parsing failed', err)
            });

    }
}