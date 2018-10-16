import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class loadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }
    render() {

        return (
            <div className="load-more" ref="moreWarp">
                <p className="load__text">点击加载更多</p>
            </div>
        )
    }

    componentDidMount() {
        this.loadMoreFn();
    }
    
    loadMoreFn() {
        const moreWarp = this.refs.moreWarp;
        const windowHeight = window.screen.height;
        let moreWarpTop = 0;
        let timeout = null;

        
        function callback() {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(item => {
                moreWarpTop = moreWarp.getBoundingClientRect().top;
                if (windowHeight > moreWarpTop) {
                    console.log('触发下拉')
                }
            }, 100);
        }
        
        window.addEventListener('scroll', callback, false);
    }
}

export default loadMore