import React from 'react';
import CurrencyAmountInput from './form/CurrencyAmountInput';
import CurrencySelect from './form/CurrencySelect';

const CurrencyConversionForm = ({data}) => (
    <div className='form-container'>
        <form id='currencyConversionForm'>
            <CurrencyAmountInput/>
            <CurrencySelect
                selectionType='fromCurrency'
                currencies={data.rates}
            />
            <CurrencySelect
                selectionType='toCurrency'    
                currencies={data.rates}
            />
            <button id='convertCurrency' type='submit'>Convert</button>
        </form>
    </div>
)

export default CurrencyConversionForm;
