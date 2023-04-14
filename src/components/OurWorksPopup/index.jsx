import React from 'react'
import './OurWorksPopup.scss'

const OurWorksPopup = ({ active, setActive, children }) => {
  return (
    <div className={active ?  'our-works-popup active' : 'our-works-popup'} onClick={() => setActive(false)}>
        <div className={active ?  'our-works-popup__content active' : 'our-works-popup__content'} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}

export default OurWorksPopup