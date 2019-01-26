import React from 'react';

const CurrencyToSelection = ({currencies}) => {
 
    let currencyOptions = [];
    for(let key in currencies) {
        const option = <option id={currencies[key]}>{key}</option>;
        currencyOptions.push(option);
    }

    return (
        <div className='toCurrencySelection'>
            <label for='toCurrency'>To</label><br/>
            <select id='toCurrency'> 
                {currencyOptions}
            </select><br/>
        </div>
    )
}

export default CurrencyToSelection;