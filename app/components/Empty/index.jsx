import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Empty extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }
    render() {
        const text = this.props.text || '';

        return (
            <div className="empty">
              <span className="empty__text">{text ? text : '暂无数据'}</span>
            </div>
        )
    }
}

export default Empty