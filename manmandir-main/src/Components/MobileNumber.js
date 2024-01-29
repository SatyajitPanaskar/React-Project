import React from 'react'
import MobileComponent from './MobileComponent'
class MobileNumber extends React.Component
{
    constructor()
    {
        super()
        this.state=
        {
            MobileNumber:['7028757019']
        }
    }
    render()
    {
        return(<div>
                <MobileComponent data={this.state.MobileNumber}></MobileComponent>
              </div>)
    }
}
export default MobileNumber; 
