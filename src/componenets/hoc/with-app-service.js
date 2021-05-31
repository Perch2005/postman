import React from 'react'
import {AppConsumer} from '../app-service-context'

const withAppService = () => (Wraper) => {
return (props) => {
    return(
<AppConsumer>
{
    (appService) =>{
        return <Wraper {...props} appService = {appService} />
    }
}
</AppConsumer>
    )
}
}

export default withAppService