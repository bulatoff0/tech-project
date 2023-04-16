import React, { useState } from 'react'
import './Calculator.scss'
import Select from 'react-select';

const Calculator = () => {
    const options = [
        {value: 'ventilation', label: 'Вентиляция (БЕЗ проекта)'},
        {value: 'ventilationWithProject', label: 'Вентиляция (С проектом)'},
        {value: 'airConditioning', label: 'Кондиционирование (БЕЗ проекта)'},
        {value: 'airConditioningWithProject', label: 'Кондиционирование (С проектом)'},
    ];
    
    const [value, setValue] = useState(options[0].label);
    
    const [squareMeters, setSquareMeters] = useState('');

    const handleChangeSelect = (selectedOption) => {
        setValue(selectedOption);
    }

    const handleChangeSquareMeters = (event) => {
        setSquareMeters(event.target.value)
    }

    const [result, setResult] = useState(null);

    const PRICE_WITHOUT_PROJECT = 290; // in Rubles
    const PRICE_WITH_PROJECT = 390; // in Rubles

    const handleClickPrice = () =>  {
        const squareMetersInput = document.getElementById('squareMeters')
        const squares = squareMetersInput.value;
        const selectValue = {value}.value.value;
        const RESULT_PRICE = 'Итоговая стоимость будет составлять: ';
        const RESULT_PRICE_CURRENCY = ' рублей' 
        const RESULT_ERROR = 'Вы пропустили одно из полей!'

        switch (selectValue) {
            case 'ventilation':
                setResult(RESULT_PRICE + squares * PRICE_WITHOUT_PROJECT + RESULT_PRICE_CURRENCY)
                break;

            case 'ventilationWithProject':
                setResult(RESULT_PRICE + squares * PRICE_WITH_PROJECT + RESULT_PRICE_CURRENCY)
                break;

            case 'airConditioning':
                setResult(RESULT_PRICE + squares * PRICE_WITHOUT_PROJECT + RESULT_PRICE_CURRENCY)
                break;

            case 'airConditioningWithProject':
                setResult(RESULT_PRICE + squares * PRICE_WITH_PROJECT + RESULT_PRICE_CURRENCY)
                break;

            default:
                setResult(RESULT_ERROR)
                break;
        }
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
                    placeholder='Выберите тип работ...' 
                    onChange={handleChangeSelect}
                    required
                    // isMulti
                    
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            fontSize: '17px',
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
                    placeholder='Введите количество квадратных метров...'
                    onChange={handleChangeSquareMeters}
                    value={squareMeters}    
                    required
                />

                <input 
                    onClick={handleClickPrice}
                    type='submit' 
                    className='calculator__count-btn' 
                    value='Узнать стоимость работ'
                />

                <p className="calculator__result">
                    {result}
                </p>
            </div>
        </div>
    )
}

export default Calculator