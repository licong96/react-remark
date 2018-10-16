import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe'
import categoryData from './data'

import './style.less'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            categoryData0: categoryData[0],
            categoryData1: categoryData[1],
            categoryData2: categoryData[2],
            index: 0,
        }
    }

    // 渲染数据
    categoryDataMap(data) {
        let list = data.map((item, index) => {
            return <li className="item__list" style={item.style} key={index}>{item.text}</li>
        })
        return list
    }

    render() {
        // 轮播图数据
        let categoryItems0 = this.categoryDataMap(this.state.categoryData0);
        let categoryItems1 = this.categoryDataMap(this.state.categoryData1);
        let categoryItems2 = this.categoryDataMap(this.state.categoryData2);

        // 轮播图配置
        const swipeOptions = {
            continuous: false,
            callback: function(index) {
                this.setState({
                    index
                })
            }.bind(this)
        }


        return (
            <div className="home-category">
                <ReactSwipe className="carousel" swipeOptions={swipeOptions}>
                    <div className="category__item">
                        <ul className="item__wrap">
                            {categoryItems0}
                        </ul>
                    </div>
                    <div className="category__item">
                        <ul className="item__wrap">
                            {categoryItems1}
                        </ul>
                    </div>
                    <div className="category__item">
                        <ul className="item__wrap">
                            {categoryItems2}
                        </ul>
                    </div>
                </ReactSwipe>
                <section className="category__dot">
                    <span className={`dot ${this.state.index === 0 ? 'active' : ''}`}></span>
                    <span className={`dot ${this.state.index === 1 ? 'active' : ''}`}></span>
                    <span className={`dot ${this.state.index === 2 ? 'active' : ''}`}></span>
                </section>
            </div>
        )
    }
}

export default Category