import React from 'react'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Benefits.scss'

const Benefits = (props) => {
     const checkIcon = <FontAwesomeIcon icon={faCheck} size='2xl' />

  return (
    <div className='benefits'>
        <div className="benefits__icon">
            {checkIcon}
        </div>

        <div className='benefits__info'>
            <div className='benefits__title'>
                {props.title}
            </div>
            <div className="benefits__descr">
                {props.descr}
            </div>
        </div>
    </div>
  )
}

export default Benefits