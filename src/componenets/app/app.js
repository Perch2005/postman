import  React, {useEffect,useState} from 'react'
import './app.css'
import {withAppService} from '../hoc'
import {connect} from 'react-redux'
import {datasRequested,datasLoaded,datasError} from '../../action/index'
import Spiner from '../spiner'
import Search from '../search'
import {useSelector,useDispatch} from 'react-redux'

const App = ({appService}) => {
    const data = useSelector((state) => state)
    const {services,loading,error} = data
    const dispatch = useDispatch()

    const [input, setInput] = useState('')

const searchFunc = (e) => {
const {value} = e.target
setInput(value)
}
    useEffect(() => {

    dispatch(datasRequested())
    // console.log(getData());
    if(input){
        appService.getService(input)
        .then((data) => dispatch(datasLoaded(data)))
        .catch((err) => dispatch(datasError(err)))
    }else{
     appService.getAllServices() 
    .then((data) => dispatch(datasLoaded(data)))
    .catch((err) => dispatch(datasError(err)))
    }
    },[input])
    console.log(data,input);
if(loading){
    return <Spiner/>
}
console.log(services);
    return(
        <div>
            <Search searchFunc = {searchFunc}/>
            {
            services.map((service) => (
            <ul key = {service.pk}>
                <li>{service.title}</li>
                <li>{service.thumbnail}</li>
            </ul>
            ))    
        }
        </div>
    )
}
// const mapStateToPprops = ({services,loading,error}) => {
// return {services,loading,error}
// }
// const mapDispatchToProps = (dispatch, {appService}) => {
//     return{
//     fetchDatas: fetchDatas(dispatch, appService.getAllServices)
//     }
// }
export default withAppService()(App)