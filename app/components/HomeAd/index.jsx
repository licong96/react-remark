import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }
    render() {
        let styles = {
            display: 'block'
        }
        
        return (
            <div className="home-ads" style={styles}>
                <ul className="ad__wrap">
                    {
                        this.props.data.map((item, index) => {
                            return (
                                <div className="ad__item" key={index}>
                                    <a className="ad__link" href={item.link} target="_blank">
                                        <img className="ad__img" src={item.img} alt={item.title} />
                                    </a>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default HomeAd