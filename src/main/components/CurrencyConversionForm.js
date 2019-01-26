import React from 'react';
import CurrencyFromSelection from './form/CurrencyFromSelection';
import CurrencyToSelection from './form/CurrencyToSelection';
import CurrencyAmountInput from './form/CurrencyAmountInput';

const CurrencyConversionForm = ({data}) => (
    <div className='form-container'>
        <form id='currencyConversionForm'>
            <CurrencyAmountInput/>
            <CurrencyFromSelection currencies={data.rates}/>
            <CurrencyToSelection currencies={data.rates}/>
            <button id='convertCurrency' type='submit'>Convert</button>
        </form>
    </div>
)

export default CurrencyConversionForm;
