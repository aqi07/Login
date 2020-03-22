import React from 'react'
// import PropTypes from 'prop-types';
import { Input } from 'antd'
import { Button } from 'antd'

function Welcome (props) {
  return (<div className='example-input'>
    <Input size='default' placeholder='用户名' />
    <Input.Password size='default' placeholder='密码' />
    <Button type='primary'>提交</Button>
  </div>)
}

export default Welcome
