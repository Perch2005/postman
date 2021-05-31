import React,{useEffect} from 'react'
import './search.css'
import {withAppService} from '../hoc'
import {connect} from 'react-redux'
import {fetchDatas} from '../../action/index'
import {useSelector,useDispatch} from 'react-redux'

const Search = ({searchFunc}) => {


    // const dispatch = useDispatch()
    return(
        <div>
            <input type = 'text' onChange = {(e) => searchFunc(e)}/>

        </div>
    )
}


export default Search