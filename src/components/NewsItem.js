import React from "react";
import {connect} from "react-redux";
class NewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.setToFavorite = this.setToFavorite.bind(this);
    }

    setToFavorite() {
        this.props.dispatch({
            type: "SET_FAVORITE",
            title: this.props.title
        })
    }


    render() {
        let date = new Date(this.props.publishedAt).toLocaleDateString();
        return (
            <div className={"news-item bs-callout bs-callout-info " + (this.props.activeMenu == 'favorites' && !this.props.favorite ? 'hidden' : '')}>
                <div className="add-to-favorite">
                    <i className={"glyphicon  " + (this.props.favorite ? " glyphicon-star" : "glyphicon-star-empty")}
                       onClick={this.setToFavorite}>
                    </i>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="img-container">
                            <img src={this.props.urlToImage}/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <a href={this.props.url} target="_blank" className="title">
                            {this.props.title}
                        </a>
                        <div className="meta">
                            <span>
                                <i className="glyphicon glyphicon-user">
                                </i>
                                {this.props.author}
                            </span>
                            <span>
                                <i className="glyphicon glyphicon-time">
                                </i>
                                {date}
                            </span>
                        </div>
                        <div className="description">
                            {this.props.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        activeMenu: state.news.active || 'all'
    }

}

export default connect(mapStateToProps)(NewsItem);
