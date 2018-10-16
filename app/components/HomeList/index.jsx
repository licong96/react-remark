import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Item from './item/index'

import './style.less'

class HomeList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }
    render() {
        const data = this.props.data;

        return (
            <div className="home-list__wrap">
                {data.map((item, index) => {
                    return (
                        <Item key={index} item={item} />
                    )
                })}
            </div>
        )
    }
}

export default HomeList