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
    const [phoneNumberMessage, setPhoneNumberMessage] = useState('');

    const handleChangePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)

        if (phoneNumber.length < 11) {
            setPhoneNumberMessage('Длина номера телефона должна составлять не менее 11 символов');
        }
    }

    /* EMAIL */
    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);

        const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailMessage('Некорректный Email адрес')
        } else {
            setEmailMessage(null);
        }
    }

    /* MESSAGE */
    const [submitMessage, setSubmitMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    /* SUBMIT BTN */
    const handleClickPrice = (e) =>  {
        e.preventDefault();

        const info = {
            workType: {value}.value.label,
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

        let emailValidation;

        const re = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

        if (!re.test(String(email).toLowerCase())) {
            emailValidation = false;
        } else {
            emailValidation = true;
        }

        setErrorMessage(
            info.workType && info.overallArea && info.ceilingsHeight && info.floors && info.bathrooms && info.bedrooms && info.userPhoheNumber.length >= 11 && emailValidation ? '' : 'Пожалуйста, заполните все поля корректно!'
            )

        console.log(
            info.workType && info.overallArea && info.ceilingsHeight && info.floors && info.bathrooms && info.bedrooms && info.userPhoheNumber.length >= 11 && emailValidation ? info : 'Пожалуйста, заполните все поля корректно!'
            )
                
        setFormSubmitStatus(
            info.workType && info.overallArea && info.ceilingsHeight && info.floors && info.bathrooms && info.bedrooms && info.userPhoheNumber.length >= 11 && emailValidation ? true : false
            );

        setSubmitMessage(
            info.workType && info.overallArea && info.ceilingsHeight && info.floors && info.bathrooms && info.bedrooms && info.userPhoheNumber.length >= 11 && emailValidation && 'Ваша заявка принята. Спасибо за то, что выбрали нас!'
        )
    }   

    /* FORM SUBMIT STATUS */
    const [formSubmitStatus, setFormSubmitStatus] = useState('');
    
    return (
        <>
            {
                formSubmitStatus 
                ? (<p className='submit-message'>{submitMessage}</p>)
                : 
                (
                    <div className='container'>
                        <span className='title'>Рассчитать стоимость</span>

                        <div className='calculator'>
                            <form 
                                action="#"
                                method='POST'
                            >
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
                                    />
                                    <div className='kitchen-square__range'>
                                        <div className='kitchen-square__min'>
                                            мин. 1
                                        </div>

                                        <div className='kitchen-square__current-value'>
                                            {kitchenSquareValue}м<sup>2</sup>
                                        </div>

                                        <div className='kitchen-square__max'>
                                            макс. 100
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
                                    />
                                    <div className='living-room__range'>
                                        <div className='living-room__min'>
                                            мин. 1
                                        </div>

                                        <div className='living-room__current-value'>
                                            {livingRoomSquareValue}м<sup>2</sup>
                                        </div>

                                        <div className='living-room__max'>
                                            макс. 200
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

                                <p className='phone-number-error'>
                                    {phoneNumber.length > 0 && phoneNumber.length < 11 && phoneNumberMessage}
                                </p>
                                <input 
                                    className='calculator__phone-number'
                                    type="tel" 
                                    minLength={11}
                                    name="userNumber" 
                                    id="userNumber" 
                                    value={phoneNumber}
                                    onChange={handleChangePhoneNumber}
                                    placeholder='Номер телефона'
                                    required
                                />

                                <p className='email-error'>
                                    {email.length > 0 && emailMessage}
                                </p>
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
                                    type='submit' 
                                    className='calculator__count-btn' 
                                    onClick={handleClickPrice}
                                    value='Отправить заявку на рассчёт'
                                />

                                <p className='submit-error-message'>
                                    {errorMessage}
                                </p>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Calculator