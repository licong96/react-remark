import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Loading extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }
    render() {
        const text = this.props.text || '';

        return (
            <div className="loading">
              <span className="loading__text">{text ? text : '加载中...'}</span>
            </div>
        )
    }
}

export default Loading