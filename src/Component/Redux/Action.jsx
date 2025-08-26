import axios from 'axios'

const Action =()=> async (dispatch)=>{
    try{
const Data = await axios.get("https://portfolio-2-xgnk.onrender.com/st")
const res = Data.data
console.log(res)
        dispatch({type: 'success', payload:res})
    }
    catch(error){
   dispatch({type:'fail', payload:error.message})
    }
}
export default Action