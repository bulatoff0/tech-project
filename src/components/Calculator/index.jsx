import React, { useState } from 'react'
import './Calculator.scss'
import Select from 'react-select';

const Calculator = () => {
    const options = [
        {value: 'house', label: 'Дом'},
        {value: 'apartments', label: 'Квартира'},
        {value: 'office', label: 'Офис'},
    ];
    
    const [value, setValue] = useState('');
    
    const handleChangeSelect = (selectedOption) => {
        setValue(selectedOption);
    }
    
    const [squareMeters, setSquareMeters] = useState('');

    const handleChangeSquareMeters = (event) => {
        setSquareMeters(event.target.value)
    }

    /* KITCHEN SQUARE */
    const [kitchenSquareValue, setKitchenSquareValue] = useState(1);

    const handleChangeKitchenSquare = (e) => {
        setKitchenSquareValue(e.target.value);
    }

    /* LIVING ROOM SQUARE */
    const [livingRoomSquareValue, setLivingRoomSquareValue] = useState(1);

    const handleChangeLivingRoomSquare = (e) => {
        setLivingRoomSquareValue(e.target.value);
    } 

    /* CEILING HEIGHT */
    const [ceilingHeight, setCeilingHeight] = useState('');

    const handleChangeCeilingHeight = (event) => {
        setCeilingHeight(event.target.value)
    }

    /* FLOORS */
    const [floorsCount, setFloorsCount] = useState('');

    const handleChangeFloorsCount = (event) => {
        setFloorsCount(event.target.value);
    }

    const handleClickFloorsNegative = () => {
        setFloorsCount((prevCount) => prevCount < 2 ? prevCount : --prevCount)
    }

    const handleClickFloorsPlus = () => {
        setFloorsCount((prevCount) => ++prevCount)
    }

    /* BATHROOMS */
    const [bathroomsCount, setBathroomsCount] = useState('');

    const handleChangeBathroomsCount = (event) => {
        setBathroomsCount(event.target.value);
    }

    const handleClickBathroomsNegative = () => {
        setBathroomsCount((prevCount) => prevCount < 2 ? prevCount : --prevCount)
    }

    const handleClickBathroomsPlus = () => {
        setBathroomsCount((prevCount) => ++prevCount)
    }

    /* BEDROOMS */
    const [bedroomsCount, setBedroomsCount] = useState('');

    const handleChangeBedroomsCount = (event) => {
        setBedroomsCount(event.target.value);
    }

    const handleClickBedroomsNegative = () => {
        setBedroomsCount((prevCount) => prevCount < 2 ? prevCount : --prevCount)
    }

    const handleClickBedroomsPlus = () => {
        setBedroomsCount((prevCount) => ++prevCount)
    }

    /* PHONE NUMBER */
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)
    }

    /* EMAIL */
    const [email, setEmail] = useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }

    /* MESSAGE */
    const [message, setMessage] = useState('');

    /* SUBMIT BTN */
    const handleClickPrice = () =>  {
        const info = {
            selectValue: {value}.value.label,
            overallArea: squareMeters,
            kitchenArea: kitchenSquareValue,
            livingRoomArea: livingRoomSquareValue,
            ceilingsHeight: ceilingHeight,
            floors: floorsCount,
            bathrooms: bathroomsCount,
            bedrooms: bedroomsCount,
            userPhoheNumber: phoneNumber, 
            userEmail: email,
        }

        setMessage(
            info.selectValue && info.overallArea && info.ceilingsHeight && info.floors && info.bathrooms && info.bedrooms && info.userPhoheNumber && info.userEmail ? 'Ваша заявка принята. Спасибо, что выбрали нас!' : 'Заполните все поля!'
        )

        console.log(
            info.selectValue && info.overallArea && info.ceilingsHeight && info.floors && info.bathrooms && info.bedrooms && info.userPhoheNumber && info.userEmail ? info : 'Заполните все поля!'
        )
    }
    
    return (
        <div className='container'>
            <span className='title'>Рассчитать стоимость</span>

            <div className='calculator'>
                <Select 
                    className='calculator__select' 
                    id='calculatorSelect'
                    options={options} 
                    value={value} 
                    placeholder='Выберите тип работ' 
                    onChange={handleChangeSelect}
                    required
                    // isMulti
                    
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            width: '100%',
                            fontSize: '20px',
                            fontWeight: 700,
                            fontFamily: 'poppins',
                            borderColor: '#a2a2a2',
                            cursor: 'pointer',
                            ":hover": {
                                borderColor: '#a2a2a2',
                            },
                        })
                    }}
                />

                <input 
                    className='calculator__square-meters' 
                    type="number" 
                    id="squareMeters"
                    placeholder='Введите общую площадь (м&sup2;)'
                    onChange={handleChangeSquareMeters}
                    value={squareMeters}    
                    min={1}
                    required
                />

                <div className='kitchen-square'>
                    <label 
                        className='kitchen-square__title' 
                        htmlFor="kitchenSquare">
                        Площадь кухни
                    </label>
                    <br />
                    <input 
                        className='kitchen-square__input' 
                        type="range" 
                        id='kitchenSquare'
                        min={1}
                        max={100}
                        value={kitchenSquareValue}
                        onChange={handleChangeKitchenSquare}
                        required
                    />
                    <div className='kitchen-square__range'>
                        <div className='kitchen-square__min'>
                            1
                        </div>

                        <div className='kitchen-square__current-value'>
                            {kitchenSquareValue}м<sup>2</sup>
                        </div>

                        <div className='kitchen-square__max'>
                            100
                        </div>
                    </div>
                </div>

                <div className='living-room-square'>
                    <label 
                        className='living-room__title' 
                        htmlFor="livingRoomSquare">
                        Площадь гостиной
                    </label>
                    <br />
                    <input 
                        className='living-room__input' 
                        type="range" 
                        id='livingRoomSquare'
                        min={1}
                        max={200}
                        value={livingRoomSquareValue}
                        onChange={handleChangeLivingRoomSquare}
                        required
                    />
                    <div className='living-room__range'>
                        <div className='living-room__min'>
                            1
                        </div>

                        <div className='living-room__current-value'>
                            {livingRoomSquareValue}м<sup>2</sup>
                        </div>

                        <div className='living-room__max'>
                            200
                        </div>
                    </div>
                </div>

                <input 
                    className='calculator__ceiling-height' 
                    type="number" 
                    id="ceilingHeight"
                    placeholder='Высота потолков (м)'
                    onChange={handleChangeCeilingHeight}
                    value={ceilingHeight}    
                    min={1}
                    required
                />

                <div className='floors'>
                    <div>
                        <button className='negative-btn' onClick={handleClickFloorsNegative}>-</button>
                    </div>
                    
                    <div className='floors__input'>
                        <label htmlFor="floorsInput">Количество этажей</label>
                        <input 
                            type="number"
                            id='floorsInput'
                            min={1}
                            value={floorsCount}
                            onChange={handleChangeFloorsCount}
                            required
                        />
                    </div>

                    <div>
                        <button className='plus-btn' onClick={handleClickFloorsPlus}>+</button>
                    </div>
                </div>

                <div className='bathrooms'>
                    <div>
                        <button className='negative-btn' onClick={handleClickBathroomsNegative}>-</button>
                    </div>
                    
                    <div className='bathrooms__input'>
                        <label htmlFor="bathroomsInput">Количество санузлов</label>
                        <input 
                            type="number"
                            id='bathroomsInput'
                            min={1}
                            value={bathroomsCount}
                            onChange={handleChangeBathroomsCount}
                            required
                        />
                    </div>

                    <div>
                        <button className='plus-btn' onClick={handleClickBathroomsPlus}>+</button>
                    </div>
                </div>

                <div className='bedrooms'>
                    <div>
                        <button className='negative-btn' onClick={handleClickBedroomsNegative}>-</button>
                    </div>
                    
                    <div className='bedrooms__input'>
                        <label htmlFor="bedroomsInput">Количество спален</label>
                        <input 
                            type="number"
                            id='bedroomsInput'
                            min={1}
                            value={bedroomsCount}
                            onChange={handleChangeBedroomsCount}
                            required
                        />
                    </div>

                    <div>
                        <button className='plus-btn' onClick={handleClickBedroomsPlus}>+</button>
                    </div>
                </div>

                <input 
                    className='calculator__phone-number'
                    type="tel" 
                    name="userNumber" 
                    id="userNumber" 
                    value={phoneNumber}
                    onChange={handleChangePhoneNumber}
                    placeholder='Номер телефона'
                    required
                />

                <input 
                    className='calculator__email'
                    type="email" 
                    name="userEmail" 
                    id="userEmail"
                    value={email}
                    onChange={handleChangeEmail}
                    placeholder='Электронная почта'
                    required
                />

                <input 
                    onClick={handleClickPrice}
                    type='submit' 
                    className='calculator__count-btn' 
                    value='Отправить заявку на рассчёт'
                    required
                />

                <p className='calculator__message'>
                    {message}
                </p>
            </div>
        </div>
    )
}

export default Calculator