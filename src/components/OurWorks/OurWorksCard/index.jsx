import React, { useState } from 'react'
import './OurWorksCard.scss'
import OurWorksPopup from '../OurWorksPopup';

const OurWorksCard = (props) => {
    const [popupActive, setPopupActive] = useState(false);

    return (
        <div>
            <OurWorksPopup active={popupActive} setActive={setPopupActive}>
                <div className='popup popup__info'>
                    <h3 className='popup__title'>
                        {props.cardId === 1 && 'Наша работа #1'}
                        {props.cardId === 2 && 'Наша работа #2'}
                        {props.cardId === 3 && 'Наша работа #3'}
                    </h3>

                    <p className='popup__descr'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, aut. Aperiam natus obcaecati non nostrum illo nobis assumenda magnam accusamus distinctio, placeat commodi nulla corporis beatae totam odio tenetur possimus harum dolore hic veritatis iusto optio! Possimus sequi blanditiis odio sit labore aspernatur fugit facere nesciunt! Sed voluptas temporibus corporis? Nostrum quibusdam quas, cupiditate neque deleniti sint quae temporibus. Aliquam, repudiandae assumenda! Velit tempore aut, illo dolor amet quis dolore vero quia eaque aperiam consequuntur error officia beatae eum ad rem accusamus vel molestiae. Non eius saepe eaque assumenda consequatur commodi, dolores ipsum cum amet veritatis, vitae natus ut laborum.
                    </p>

                    <p className='popup__descr'>
                        *Можно спокойно добавить изображения и любой другой текст, иконки.*
                    </p>
                </div>
            </OurWorksPopup>

            <div className='our-works-card' onClick={() => setPopupActive(true)}>
                <div className="img-wrapper">
                    <img className='our-works-card__img' src={props.img} alt={props.title} />   
                </div>

                <div className='our-works-card__title'>
                    <p>
                        {props.title}
                    </p>
                </div>

                <div className='our-works-card__descr'>
                    <p>
                        {props.descr}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OurWorksCard