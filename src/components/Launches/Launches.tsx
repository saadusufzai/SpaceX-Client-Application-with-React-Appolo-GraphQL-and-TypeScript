import React from 'react'
import LaunchListContainer from '../LaunchList'
import {OwnProps} from '../LaunchList/LaunchList'
import LaunchProfileContainer from '../LaunchProfile'

interface Props extends OwnProps {
    id:number
 
}

const Launches:React.FC<Props> = ({id,handelIdChange}) => {
    return (
        <div className='App'>
           <LaunchListContainer handelIdChange={handelIdChange}/>
           <LaunchProfileContainer id={id} />
        </div>
    )
}

export default Launches
    