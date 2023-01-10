import axios from 'axios';
import React, { useContext ,useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './state/contexts/UserContext';

var label=''
const Validation=''


function Return(){

}
function Form() {
  const [loading, setLoading] = useState(false);
  const {state, dispatch}=useContext(UserContext);
const [inputs,setInputs]=useState([])
var [datas,setData]=useState()
const [ok,setOk]=useState('<div </div/>')

const queryString = document.URL
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')



 function newState(v){
  dispatch({
    type: 'setHtml',
    payload: {
      html: v,
    },
  });



  dispatch({
    type: 'setLenArraySub',
    payload: {
      lenArraySub: String(v.match(/[$][a-z]+/gi)).length,
    },
  });



   setData(v)
   setOk(v)
   
   document.getElementById('ok').click();
  return  true
}



useEffect(()=>{
(async()=>{
  const {data:d}=await axios.get('http://192.168.223.195/menu/get-form.php?id='+id);
const da=d.html
const len= String(da.match(/[$][a-z]+/gi))

var lensub=da.match(/[$][a-z]+/gi).toString()
    lensub=lensub.split(',')


  dispatch({
    type: 'setLenArraySub',
    payload: {
      lenArraySub:len.length,
    },
  });


  dispatch({
    type: 'setLenArray',
    payload: {
      lenArray:lensub.length,
    },
  });



setData(da)
})()

},[])


  useEffect(() => {

    if(state.lenArray==0)  return Return()

if (state.lenArraySub>=state.lenArray){


  var  data=datas;
  data=data.match(/[$][a-z]+/gi).toString()
setInputs(data.split(','))

dispatch({
  type: 'setHtml',
  payload: {
    html:datas
  },
});


dispatch({
  type: 'setInput',
  payload: {
    inputs:data.split(',')
  },
});


}




  }, [datas])


 
function removeSifrao(v){
return v.split('$')[1]
}

var  Validation=(event)=>{
  event.preventDefault();
  let res='';
  var data = new FormData(event.currentTarget);

for(let i=0; inputs.length>i;i++){
 label=(removeSifrao(inputs[i]))
///console.log(data.get(`${label}`))

let regexp=new RegExp(`\\${'$'+label}`,'g')
let v =state.html.replace('$'+label,String( data.get(`${label}`)))
let res=  newState(v)

///let xx=res==true? document.querySelector('.render').innerHTML=state.html:"ddddd"
///console.log(xx)
}
return state.html

}



  return (
    <div className='row card'>
<div className='' style={{display:'flex',justifyContent:'center',paddingTop:20}}>
<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

<label style={{fontSize:'13pt',textTransform:'uppercase'}} htmlFor ="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Formulario de Requerimento</label>


<form  onSubmit={Validation}>
{inputs.map(i=>
<div  style={{padding:10}} key={removeSifrao(i)}>   
<div>
   <label htmlFor ="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{removeSifrao(i).toUpperCase()}</label>
    <input type="text" name={removeSifrao(i)}  id="name" className={removeSifrao(i)+" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"} placeholder={removeSifrao(i).toUpperCase()} />
    </div>


</div>
  )}




<div className='p-1' style={{width:'100%',justifyContent:'flex-start',display:'flex'}}>
{state.lenArraySub>=state.lenArray?'':
<Link to={'/print/?allow=true&id='+id} style={{textAlign:'center',width:'100%'}}  className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Concluir
    </Link>
}

{state.lenArraySub>=state.lenArray?<button style={{}} className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onChange={()=>Validation()} id='ok'>{state.lenArraySub>=state.lenArray?'Proximo':'Concluir'}</button>:""}

</div>
</form>
</div>

    </div>


    <div className='renderx' >

</div>
    </div>
  )


}
export default Form