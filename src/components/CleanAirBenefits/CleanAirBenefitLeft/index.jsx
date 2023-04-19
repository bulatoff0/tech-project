import React from 'react'
import './CleanAirBenefitLeft.scss'

const CleanAirBenefitLeft = (props) => {
  return (
    <div className='cl-air-benefits'>
        <div>
            <img  className="cl-air-benefits__img" src={props.img} alt="Benefit One" width={'94px'} />
        </div>

        <div className="cl-air-benefits__info">
            <div className="cl-air-benefits__title">
                {props.title}
            </div>
            <div className="cl-air-benefits__descr">
                {props.descr}
            </div>
        </div>
    </div>
  )
}

export default CleanAirBenefitLeft