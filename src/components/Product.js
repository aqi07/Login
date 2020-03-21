import React from "react"
import { Divider } from "antd";

export default class Product extends React.Component{

    clickProductList = (event) => { 
        const currentProduct = {
            name:"玉米1"
        }


        this.props.dispatch({
            type:"product/updateList",
            payload:currentProduct
        })
    }


    render(){
        const { productList} = this.props.productList;
        console.log(this.props.dispatch);

        return(
            <div>
                product商品： {this.props.title}
                <ul>
                    {
                       productList.map((element,index)=> {
                           return <li key={index}>{element.name}

                           </li>
                       })
                    }
                </ul>
                <button onClick={this.clickProductList}>
                    获取商品列表
                </button>
            </div>

        )
    }
}
