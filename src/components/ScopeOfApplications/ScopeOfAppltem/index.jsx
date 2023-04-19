import React from 'react'
import './ScopeOfAppItem.scss'

const ScopeOfAppItem = (props) => {
  return (
    <div className='scope-of-app'>
        <div>
            <img className="scope-of-app__img" src={props.img} alt={props.title} />
        </div>

        <div className="scope-of-app__info">
            <div className="scope-of-app__title">
                {props.title}
            </div>
            <div className="scope-of-app__descr">
                {props.descr}
            </div>
        </div>
    </div>
  )
}

export default ScopeOfAppItem