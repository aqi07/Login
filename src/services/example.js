import request from '../utils/request'

const pox="/apis/"

export function query () {
  return request('/api/users')
}

const pox2="/apis2/"



export function testCnode() {
  return request(pox+'/api/v1/topics')
}

export function testLogin() {
  return request(pox2+'/mquser')
}