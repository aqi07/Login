import React from "react"
import Test from "../../components/Test"
import {connect} from "dva"

     class IndexPage extends React.Component{
        render(){
            const {productList,dispatch} = this.props;
            return(
                <div>
                    <Test dispatch={dispatch} title="商品类型" productList={productList} />
                </div>
            ) 
        }
    }

    const mapStateToProps = (state) =>{
        return{
            productList:state.product
        }
    }

    export default connect(mapStateToProps)(IndexPage);
