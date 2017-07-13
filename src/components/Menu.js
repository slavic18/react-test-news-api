import React from "react";
import {connect} from "react-redux";
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick(e) {
        e.preventDefault();
        if (e.target.dataset && e.target.dataset.key) {
            this.props.dispatch({
                type: 'CHANGE_NEWS_TYPE',
                data: e.target.dataset.key
            })
        }

    }

    render() {
        return (
            <div className="menu">
                {['all', 'favorites'].map((item) => {
                    return (
                        <button key={item} className={"btn btn-primary " + (item == this.props.active ? 'active' : '')}
                                onClick={this.handleMenuClick} data-key={item}>
                            {item}
                        </button>
                    )
                })}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        active: state.news.active || 'all'
    }
}
export  default connect(mapStateToProps)(Menu);