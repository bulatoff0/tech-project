import React from 'react'
import './VentilationBenefitsCard.scss'

const VentilationBenefitsCard = (props) => {
  return (
    <div className='ventilation-benefits-card'>
        <h3>
            {props.title}
        </h3>

        <p>
            {props.descr}
        </p>
    </div>
  )
}

export default VentilationBenefitsCard