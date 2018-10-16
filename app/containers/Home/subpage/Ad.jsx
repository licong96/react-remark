import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeAd from '../../../components/HomeAd/index'
import { getAdData } from '../../../fetch/home/home'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }
    render() {
      console.log(this.state.data)
        return (
          <HomeAd data={this.state.data} />
        )
    }
    componentDidMount() {
      getAdData().then(res => {
        return res.json()
      }).then(json => {
        this.setState({
          data: json
        })
      })
    }
}

export default Ad