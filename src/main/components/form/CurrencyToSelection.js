import React from 'react';

const CurrencyToSelection = () => (
    <div className='toCurrencySelection'>
        <label for='toCurrency'>To</label><br/>
        <select id='toCurrency'> 
            <option value='GBP'>USD</option>
        </select><br/>
    </div>
)

export default CurrencyToSelection;