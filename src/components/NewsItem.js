import React from "react";
export default class NewsItem extends React.Component {

    render() {
        let date = new Date(this.props.publishedAt).toLocaleDateString();
        return (
            <div className="news-item bs-callout bs-callout-info">
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
