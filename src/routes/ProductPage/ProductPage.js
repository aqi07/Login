import React from 'react'
import Test from '../../components/Test'
import { connect } from 'dva'
// import * as apis2 from "../../services/example"

class IndexPage extends React.Component {
  componentDidMount(){
    // apis.testCnode().then((res)=>(
    //   console.log(res)
    // ))
    // apis2.testLogin().then((res)=>(
    //     console.log(res)
    // ))
    
  }

  render () {
    const { productList, dispatch } = this.props
    return (
      <div>
        <Test dispatch={dispatch} title='商品类型' productList={productList} />
        {this.props.msg}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.checklist.Msg)
  return {
    productList: state.product,
    msg: state.checklist.Msg
  }
}

export default connect(mapStateToProps)(IndexPage)
