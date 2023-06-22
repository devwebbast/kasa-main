import React from 'react'
import { useState } from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

function AboutItems ({title, content}){
    const [isToggled, setIsToggle] = useState(false)
    const toggleItem = () => {
        setIsToggle(!isToggled)
        
    }

    return(
        <div className='collapse'>
            <div className="title-item" onClick={() => toggleItem()}>
                <h2>{title}</h2>
                {isToggled ? (
                    <FontAwesomeIcon className='chevrons' icon={faChevronUp} />
                    ) : (
                    <FontAwesomeIcon className='chevrons chevrons-style' icon={faChevronDown} />
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