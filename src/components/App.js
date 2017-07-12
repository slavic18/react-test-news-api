import React from "react";
import "whatwg-fetch";
import {connect} from "react-redux";
import NewsItem from "./NewsItem";
import Menu from "./Menu";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.getSource = this.getSource.bind(this);
        this.state = {
            sources: {
                'ars-technica': 0,
                'bild': 0,
                'breitbart-news': 0,
                'business-insider-uk': 0,
                'daily-mail': 0,
                'die-zeit': 0,
                'espn-cric-info': 0,

            },
            allowLoad: true,
        };

    }

    handleScroll() {
        let body = document.querySelector("body");
        body.onscroll = () => {
            let bottomPosition = body.scrollTop + window.innerHeight;
            if (( this.newsList.clientHeight - bottomPosition) < 200) {
                if (this.state.allowLoad && this.props.active == 'all') {
                    this.setState({allowLoad: false});
                    this.props.dispatch({
                        type: 'FETCH_NEWS',
                        source: this.getSource()
                    });
                }
            }
        }
    }

    getSource() {
        for (let key in this.state.sources) {
            if (!this.state.sources[key]) {
                this.setState({sources: Object.assign({}, this.state.sources, {[key]: 1})});
                return key;
            }
        }
        return false
    }

    componentWillReceiveProps() {
        this.setState({allowLoad: true})
    }

    componentDidMount() {
        this.handleScroll();
        this.props.dispatch({
            type: 'FETCH_NEWS',
            source: this.getSource()
        });
    }

    render() {
        return (
            <div className="container">
                <div className="news-list" ref={(div) => {
                    this.newsList = div;
                }}>
                    <Menu/>
                    {this.props.articles.map((item, key) => {
                        return <NewsItem key={key} {...item} />
                    })}

                </div>
            </div>
        )
    }

}


function mapStateToProps(state) {
    return {
        active: state.news.active || 'all',
        articles: state.news.articles || [],
    };
}
export default connect(mapStateToProps)(App);