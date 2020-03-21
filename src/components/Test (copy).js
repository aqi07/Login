import React from "react"
import { Divider } from "antd";
import { Input, Button, Form, Checkbox } from 'antd';


export default class Test extends React.Component{
    

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
        console.log(this.props);

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
                    ada's test
                </button>
                <div className="example-input">
                   <Input size="default" placeholder="用户名"/>
                   <Input.Password size="default" placeholder="密码" />
                   <Button type="primary">提交</Button>
               </div>
            </div>

            


              
            

        )
    }
}
