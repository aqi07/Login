export default {
  namespace: 'product',
  state: {
    productList: [
      {
        name: '豆子'
      },
      {
        name: '玉米'
      }
    ]
  },
  reducers: {
    updateList (state, action) {
      const currentProductList = deepClone(state)
      currentProductList.productList.push(action.payload)
      return currentProductList
    }
  }
}

function deepClone (arr) {
  const _obj = JSON.stringify(arr)
  const objClone = JSON.parse(_obj)
  return objClone
}
