import React from 'react'
import './ScopeOfApplications.scss'
import ScopeOfAppItem from '../ScopeOfAppltem'

/* img's */ 
import apartments from '../../resources/img/apartments.jpg'
import house from '../../resources/img/house.jpg'
import office from '../../resources/img/office.jpg'

/* static text */
const componentTexts = {
    'APARTS_DESCR': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat non quia blanditiis fuga dolores voluptatum quibusdam eius est odio.',

    'HOUSE_DESCR': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae illum ab minima dolores id adipisci voluptates tempora, reprehenderit eos nulla.',

    'OFFICE_DESCR': 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla labore vitae architecto perspiciatis! Vitae exercitationem officiis repellat ipsam, quisquam ut.',
}

const ScopeOfApplications = () => {
  return (
    <div className='container'>
        <span className='title'>Область применения</span>

        <div className="scope-of-app-container">
            <ScopeOfAppItem img={apartments} title={'Квартира'} descr={componentTexts.APARTS_DESCR} />
            <ScopeOfAppItem img={office} title={'Офис'} descr={componentTexts.OFFICE_DESCR} />
            <ScopeOfAppItem img={house} title={'Дом'} descr={componentTexts.HOUSE_DESCR} />
        </div>
        
    </div>
  )
}

export default ScopeOfApplications
