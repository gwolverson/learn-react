import React from 'react';

const CurrencyConversionResults = ({amount, result, fromCurrencyKey, toCurrencyKey}) => (
    <div className='conversion-results-container'>
        <p>{amount} {fromCurrencyKey} converted into {toCurrencyKey} is:</p>
        <p id='result'>{result}</p>
    </div>
)

export default CurrencyConversionResults;