import React from 'react';

const CurrencySelect = ({selectionType, currencies}) => {
 
    let currencyOptions = [];
    for(let key in currencies) {
        const option = <option id={currencies[key]}>{key}</option>;
        currencyOptions.push(option);
    }

    return (
        <div className={`${selectionType}Selection`}>
            <label for={selectionType}>From</label><br/>
            <select id={selectionType}>
                {currencyOptions}
            </select><br/>
        </div>
    )
}

export default CurrencySelect;