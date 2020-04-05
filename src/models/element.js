import  * as apis2 from "../services/example"


export default {

    namespace: 'center',
  
    state: {
        result: [],
        Namelist: [{name:"ada",password:"123"},{name:"dada",password:"456"}],
        datatransfer:{},
        Msg:"After input name & password, you could submit",
        Reserve:"yes"
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      }
    },
  
    effects: {
      *asyncverify({ payload }, { call, put }) {  // eslint-disable-line
        let res=yield call(apis2.testLogin)
        if (res.data){
          yield put({ 
            type: 'verify',
            data: {'form':payload, 'api':res.data}

           })
        }
        // yield console.log(payload)
      }
    },
  
    reducers: {
      verify (state, payload) {
          const _state = deepClone(state)
          _state.datatransfer=payload.data
          let isOk = false
          _state.datatransfer.api.forEach(v=>{
            if (v.userId === _state.datatransfer.form.username && v.password === _state.datatransfer.form.password){
              isOk= true
            }
          })
          _state.Msg = isOk ? 'Success!' : 'Fail!'
          
          console.log(_state)
        return  _state
      }
    }
  
  }
  function deepClone (arr) {
    const _obj = JSON.stringify(arr)
    const objClone = JSON.parse(_obj)
    return objClone
  }

