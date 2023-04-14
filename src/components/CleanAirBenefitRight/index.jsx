import React from 'react'
import './CleanAirBenefitRight.scss'

const CleanAirBenefitRight= (props) => {
  return (
    <div className='cl-air-benefits'>
        <div className="cl-air-benefits__info">
            <div className="cl-air-benefits__title">
                {props.title}
            </div>
            <div className="cl-air-benefits__descr">
                {props.descr}
            </div>
        </div>

        <div>
            <img  className="cl-air-benefits__img" src={props.img} alt={props.title} />
        </div>
    </div>
  )
}

export default CleanAirBenefitRight