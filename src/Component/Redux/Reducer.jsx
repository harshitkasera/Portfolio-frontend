const Data = []
const Reducers = (state={Data},Action)=>{
switch(Action.type){
    case 'success':
        return{Data: Action.payload}
 case 'fail':
        return {Data: Action.payload}
      default: 
            return state

}
}
export default Reducers