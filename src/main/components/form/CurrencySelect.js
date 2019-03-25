import React from 'react';

const CurrencySelect = ({selectionType, currencies, handleSelect}) => {
 
    let currencyOptions = [];
    for(let key in currencies) {
        const option = <option key={key} id={currencies[key]}>{key}</option>;
        currencyOptions.push(option);
    }

    return (
        <div className={`${selectionType}Selection`}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor={selectionType}>From</label>
                </div>
                <select className="custom-select" id={selectionType} onChange={handleSelect}>
                    {currencyOptions}
                </select>
            </div>
        </div>
    )
}

export default CurrencySelect;