import React from 'react'
import './ScopeOfApplications.scss'
import ScopeOfAppItem from '../ScopeOfAppltem'

/* img's */ 
import apartments from '../../resources/img/apartments.jpg'
import house from '../../resources/img/house.jpg'
import office from '../../resources/img/office.jpg'

/* static text */
const componentTexts = {
    'APARTS_DESCR': 'Компактные вентиляционные установки для квартир не требуют дополнительного места. Они встраиваются в кухонную мебель и одновременно работают как вытяжка.',

    'HOUSE_DESCR': 'Приточно-вытяжная вентиляция загородного дома экономит до 75% тепловой энергии, и даёт возможность установить панорамные окна без открывания.',

    'OFFICE_DESCR': 'Постоянный обмен воздуха в помещении способствует повышению продуктивности и снижению риска деменции (способность мыслить креативно).',
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
