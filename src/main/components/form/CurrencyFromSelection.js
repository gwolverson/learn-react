import React from 'react';

const CurrencyFromSelection = ({currencies}) => {
 
    let currencyOptions = [];
    for(let key in currencies) {
        const option = <option id={currencies[key]}>{key}</option>;
        currencyOptions.push(option);
    }

    return (
        <div className='fromCurrencySelection'>
            <label for='fromCurrency'>From</label><br/>
            <select id='fromCurrency'>
                {currencyOptions}
            </select><br/>
        </div>
    )
}

export default CurrencyFromSelection;