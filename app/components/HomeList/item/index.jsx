import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class item extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }
    render() {
        const item = this.props.item;

        return (
            <div className="public item">
                <div className="item__left">
                    <img className="item__img" src={item.img} alt={item.title} />
                </div>
                <div className="item__right">
                    <div className="item__top">
                        <h4 className="item__title">{item.title}</h4>
                        <span className="item__distance">{item.distance}</span>
                    </div>
                    <div className="item__subtitle">{item.subTitle}</div>
                    <div className="item__foot">
                        <span className="item__price">¥{item.price}</span>
                        <span className="item__mumber">已售{item.mumber}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default item