import React from 'react'
import './OurWorks.scss'
import OurWorksCard from './OurWorksCard'

/* img */
import resComplex from '../../resources/img/resComplex.jpg'
import resComplex2 from '../../resources/img/resComplex2.jpg'
import resComplex3 from '../../resources/img/resComplex3.jpg'

/* static texts */
const OUR_WORKS_DESCR = 'Описание нашей работы описание нашей работы Описание нашей работы описание нашей работы Описание нашей работы описание нашей работы. Подробнее...'

const OurWorks = () => {
    
  return (
    <div className='container'>
        <span className='title'>Наши работы:</span>

        <div className='our-works-container'>
            <OurWorksCard  img={resComplex} title={'Наша работа #1'} descr={OUR_WORKS_DESCR} cardId={1} />
            <OurWorksCard img={resComplex2} title={'Наша работа #2'} descr={OUR_WORKS_DESCR} cardId={2} />
            <OurWorksCard img={resComplex3} title={'Наша работа #3'} descr={OUR_WORKS_DESCR} cardId={3} />
        </div>
    </div>
  )
}

export default OurWorks