import React from 'react'
import CleanAirBenefitLeft from '../CleanAirBenefitLeft'
import CleanAirBenefitRight from '../CleanAirBenefitRight'
import mountains from '../../resources/img/mountains.png'
import './CleanAirBenefits.scss'

const CleanAirBenefits = () => {
  return (
    <div className='container'>
        <span className='title'>Почему  свежий и чистый воздух так важен?</span>
        
        <div className='cl-air-all-benefits'>
            <CleanAirBenefitLeft img={mountains} title='Заголовок 1' descr='Описание 1' />
            <CleanAirBenefitRight img={mountains} title='Заголовок 2' descr='Описание 2' />
            <CleanAirBenefitLeft img={mountains} title='Заголовок 3' descr='Описание 3' />
            <CleanAirBenefitRight img={mountains} title='Заголовок 4' descr='Описание 4' />
        </div>
        
    </div>
  )
}

export default CleanAirBenefits