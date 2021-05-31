const initialState = {
    services:[],
    loading:true,
    error:null
}

const reducer = (state = initialState, action) =>{
console.log(action.payload);
    switch(action.type){
        case 'FETCH_SERVICES_REQUEST':
            return{
                services:[],
                loading:true,
                error:null
            }
        case 'FETCH_SERVICES_SUCCESS':
            return{ 
                services:action.payload,
                loading:false,
                error:null
            }
            case 'FETCH_SERVICES_FAILURE':
                return{
                    services:[],
                    loading:false,
                    error:action.payload
                }
                default:
                return state
    }
}
export default reducer