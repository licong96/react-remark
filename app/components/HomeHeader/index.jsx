import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="home-header">
                <div className="header__city">
                    <span className="header__city-name">{this.props.cityName}</span>
                    <i className="icon-angle-down"></i>
                </div>
                <div className="header__center">
                    <i className="icon-search"></i>
                    <input className="header__input" type="text" placeholder="搜索" />
                </div>
                <div className="header__user">
                    <i className="icon-user"></i>
                </div>
            </div>
        )
    }
}

export default HomeHeader