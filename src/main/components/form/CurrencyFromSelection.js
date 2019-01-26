import React from 'react';

const CurrencyFromSelection = () => (
    <div className='fromCurrencySelection'>
        <label for='fromCurrency'>From</label><br/>
        <select id='fromCurrency'>
            <option value='GBP'>GBP</option>
        </select><br/>
    </div>
)

export default CurrencyFromSelection;