export default {
    namespace: 'checklist',
    state: {
      Msg:"Please login",
      Namelist:[{"id":1,"userId":"Ada","nickname":"Ada","avatar":"","password":"123"},{"id":2,"userId":"bravebear922","nickname":"Bernard","avatar":"","password":"123"},{"id":3,"userId":"mrey16","nickname":"Mat","avatar":"","password":"abc"}]
},
    reducers:{
      updateStatus(state,payload){
      let _state = deepClone(state)
      _state.Namelist.forEach(v=>{
        if(v.userId === payload.data.username && v.password === payload.data.password) {
        _state.Msg="Success!"}else{_state.Msg="Fail!"}
        console.log(_state.Msg)
         })
      return _state;
                                }
    }
}

function deepClone(arr){
  let _obj = JSON.stringify(arr),
      objClone = JSON.parse(_obj);
  return objClone
}