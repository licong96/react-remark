import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/index'
import { getListData } from '../../../fetch/home/home'
import HomeList from '../../../components/HomeList/index'
import Loading from '@/components/Loading/index'
import Empty from '@/components/Empty/index'
import LoadMore from '@/components/LoadMore'

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: [],
            hasMore: false,
            loading: false
        }
    }
    render() {
        return (
          <div className="home-list">
            <h3 className="home-list__title">猜你喜欢</h3>
            {
                this.state.data.length
                ? <HomeList data={this.state.data} />
                : this.state.loading 
                ? <Empty />
                : <Loading />
            }
            {
                this.state.data.length ? <LoadMore /> : ''
            }
          </div>
        )
    }
    componentDidMount() {
        // 获取猜你喜欢的数据列表
        setTimeout(() => {
            this.getListData();
        }, 1200)
    }
    // 获取猜你喜欢的数据列表
    getListData() {
        let city = this.props.cityName
        let page = 0

        getListData(city, page).then(res => {
            return res.json();
        }).then(json => {
            this.setState({
                data: json.data
            })
        }).catch(err => {
            this.setState({
                data: [],
                loading: true
            })
        })
    }
}

export default List