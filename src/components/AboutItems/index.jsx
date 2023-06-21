import React from 'react'
import { useState } from "react"
import { Icon } from 'react-icons-kit'
import {chevronUp} from 'react-icons-kit/feather/chevronUp'
import {chevronDown} from 'react-icons-kit/feather/chevronDown'

function AboutItems ({title, content}){
    const [isToggled, setIsToggle] = useState(false)
    const toggleItem = () => {
        setIsToggle(!isToggled)
        
    }

    return(
        <div>
        <div className="title-item" onClick={() => toggleItem()}>
            <h2>{title}</h2>
            {isToggled ? (
               <Icon className='chevrons' icon={chevronUp} size={30}  />
                ) : (
                <Icon className='chevrons' icon={chevronDown} size={30} />
                )}
    </div>
    {isToggled && (
        <div className="content-item" >
            <p>{content}</p>
        </div>
    )}
    </div>
    )
}

export default AboutItems