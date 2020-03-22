export default {
  namespace: 'checklist',
  state: {
    Msg: 'Please login',
    Namelist: [{ id: 1, userId: 'Ada', nickname: 'Ada', avatar: '', password: '123' }, { id: 2, userId: 'bravebear922', nickname: 'Bernard', avatar: '', password: '123' }, { id: 3, userId: 'mrey16', nickname: 'Mat', avatar: '', password: 'abc' }]
  },
  reducers: {
    updateStatus (state, payload) {
      const _state = deepClone(state)
      let isOk = false
      _state.Namelist.forEach(v => {
        if (v.userId === payload.data.username && v.password === payload.data.password) {
          isOk = true
        }
      })
      _state.Msg = isOk ? 'Success!' : 'Fail!'
      console.log(_state.Msg)
      return _state
    }
  }
}

function deepClone (arr) {
  const _obj = JSON.stringify(arr)
  const objClone = JSON.parse(_obj)
  return objClone
}
