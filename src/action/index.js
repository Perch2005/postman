const datasLoaded = (newData) => {
    return{
        type:'FETCH_SERVICES_SUCCESS',
        payload:newData
    }
}

const datasRequested = () => {
    return{
        type:'FETCH_SERVICES_FAILURE',
    }
}

const datasError = (err) => {
    return{
        type:'FETCH_SERVICES_FAILURE',
        payload:err
    }
}

const fetchDatas = (dispatch,getData,prop) => () =>{
    dispatch(datasRequested())
    console.log(getData());
    getData(prop)
    .then((data) => dispatch(datasLoaded(data)))
    .catch((err) => dispatch(datasError(err)))
   }

   export {
    fetchDatas,
    datasRequested,datasLoaded,datasError
   }