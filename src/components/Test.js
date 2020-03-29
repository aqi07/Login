import React from 'react'
import { Divider, Input, Button, Form, Checkbox } from 'antd'
import  * as apis from "../services/example"

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const Test = (props) => {
  const onFinish = values => {
    console.log('Success:', values)
    props.dispatch({
      type: 'checklist/testLogin',
      data: values
    }
    )
  }
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  const handleSetup =() => {
    props.dispatch({
      type: 'checklist/updateStatusAsync',
    })
  } 

  // const testLogin=()=>{
  //   props.dispatch({
  //     type:"checklist/testLogin"
  //   })

  // }

  return (
    <div>
    <Form
      {...layout}
      name='basic'
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Username'
        name='username'
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
            Submit
        </Button>
      </Form.Item>
    </Form>
        {/* <Button onClick={testLogin} type='primary' htmlType='submit'>
            Asyncfunction
        </Button> */}
    </div>
  )
}

export default Test
