import React from 'react';
import CurrencyAmountInput from './form/CurrencyAmountInput';
import CurrencySelect from './form/CurrencySelect';

const CurrencyConversionForm = ({data, handleChange, handleSelect, handleSubmit}) => (
    <div className='form-container'>
        <form id='currencyConversionForm' onSubmit={handleSubmit}>
            <CurrencyAmountInput handleChange={handleChange}/>
            <CurrencySelect
                selectionType='fromCurrency'
                currencies={data.rates}
                handleSelect={handleSelect}
            />
            <CurrencySelect
                selectionType='toCurrency'    
                currencies={data.rates}
                handleSelect={handleSelect}
            />
            <button id='convertCurrency' type='submit'>Convert</button>
        </form>
    </div>
)

export default CurrencyConversionForm;
