import React from 'react'
import {connect} from 'dva'
import Welcome from '../components/Element'

class Login extends React.Component{

  render(){
    // console.log(this.props)
    
    return(
      
      <div>
      <center>登录框 version2</center>
        <Welcome dispatch={this.props.dispatch} />
      <h2>{this.props.text}</h2>
      <center>{this.props.msg}</center>
      </div>
    );
}
}

const mapStateToProps= (state)=>{
  console.log(state);
  return{
    msg:state.center.Msg,
    text:state.center.result
    
  }
}
export default connect(mapStateToProps)(Login)