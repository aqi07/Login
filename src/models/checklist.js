import  * as apis from "../services/example"
import  * as apis2 from "../services/example"

export default {
  namespace: 'checklist',
  state: {
    Msg: 'Please login',
    Namelist: []
  },
  reducers: {
    // updateStatus (state, payload) {
    //   const _state = deepClone(state)
    //   let isOk = false
    //   _state.Namelist.forEach(v => {
    //     if (v.userId === payload.data.username && v.password === payload.data.password) {
    //       isOk = true
    //     }
    //   })
    //   _state.Msg = isOk ? 'Success!' : 'Fail!'
    //   console.log(_state.Msg)
    //   return _state
    // },
    setLogin(state,payload){
      const _state = deepClone(state)
      _state.Namelist=payload.data
      console.log(_state.Namelist)
      // let isOk = false
      // _state.Namelist.forEach(v => {
      //   if (v.userId === payload.data.username && v.password === payload.data.password) {
      //     isOk = true
      //   }
      // })
      // _state.Msg = isOk ? 'Success!' : 'Fail!'

      return _state
      console.log(_state)
    }
  },

  effects: {
    *updateStatusAsync({payload},{put,call}){
      yield put({
        type: "updateStatus",
        data:{
          username:'Ada',
          password:'123'
        }
      })  

    },
     *testCnode({payload},{put,call}){
       let rel=yield call(apis.testCnode)
        console.log(rel);
    },
     *testLogin({payload},{put,call}){
       console.log(payload)
       let res=yield call(apis2.testLogin);
       if(res.data){
        //  yield put
        // console.log(res.data);
        yield put({
          type:"setLogin",
          data:{"form":payload, "api":res.data}
        })
       }
         
     }
  }
}

function deepClone (arr) {
  const _obj = JSON.stringify(arr)
  const objClone = JSON.parse(_obj)
  return objClone
}
