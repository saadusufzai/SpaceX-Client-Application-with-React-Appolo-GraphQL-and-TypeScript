import React from 'react'
import './style.css'
import { LaunchListQuery } from '../../generated/graphql'

export interface OwnProps {
    handelIdChange: (newId: number|undefined|null)=> void
}

interface Props extends OwnProps {
    data: LaunchListQuery
}

const className = 'LaunchList'


const LaunchList: React.FC<Props> = ({data,handelIdChange}) => {
    return (
        <div className={className}>
            <h3>Launches</h3>
            <ol className = {`${className}__list`}>
                {!!data.launches &&
                   data.launches.map((launch, i)=>
                   !!launch && (
                       <li key={i} className={`${className}__item`}
                        onClick={()=>handelIdChange(launch.flight_number)}
                        >
                           {launch.mission_name} ({launch.launch_year})
                           
                       </li>
                   )
                   ) 
                }

            </ol>
            
        </div>
    )
}

export default LaunchList
