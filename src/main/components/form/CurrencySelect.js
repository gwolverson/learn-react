import React from 'react';

const CurrencySelect = ({selectionType, currencies, handleSelect}) => {
 
    let currencyOptions = [];
    for(let key in currencies) {
        const option = <option key={key} id={currencies[key]}>{key}</option>;
        currencyOptions.push(option);
    }

    return (
        <div className={`${selectionType}Selection`}>
            <label htmlFor={selectionType}>From</label><br/>
            <select id={selectionType} onChange={handleSelect}>
                {currencyOptions}
            </select><br/>
        </div>
    )
}

export default CurrencySelect;