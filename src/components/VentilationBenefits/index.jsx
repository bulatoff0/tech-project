import React from 'react'
import VentilationBenefitsCard from './VentilationBenefitsCard'
import './VentilationBenefits.scss'

const DESCR = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum possimus ab facere repellat voluptatibus et rem cumque animi, ea culpa laudantium sunt. Repudiandae, expedita aspernatur autem excepturi porro ad ea iste distinctio numquam eum perspiciatis magnam fugiat sequi maiores impedit.'

const VentilationBenefits = () => {
  return (
    <div className='container'>
        <span className='title'>Что даёт нам вентиляция?</span>

        <div className='ventilation-benefits-cards'>
            <VentilationBenefitsCard title='Заголовок' descr={DESCR} />
            <VentilationBenefitsCard title='Заголовок' descr={DESCR} />
            <VentilationBenefitsCard title='Заголовок' descr={DESCR} />
            <VentilationBenefitsCard title='Заголовок' descr={DESCR} />
            <VentilationBenefitsCard title='Заголовок' descr={DESCR} />
            <VentilationBenefitsCard title='Заголовок' descr={DESCR} />
        </div>
    </div>
  )
}

export default VentilationBenefits