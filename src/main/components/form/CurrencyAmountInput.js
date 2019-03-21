import React from 'react';

const CurrencyAmountInput = ({handleChange}) => (
    <div>
        <label htmlFor='amount'>Amount to Convert</label><br/>
        <input class="form-control" id='amount' type='text' name='amount' onChange={handleChange}/><br/>
    </div>
)

export default CurrencyAmountInput;