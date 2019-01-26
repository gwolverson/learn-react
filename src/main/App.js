import React from 'react';

const App = () => (
    <div>
        <h1 id='pageTitle'>Currency Converter</h1>
        <div className='currency-conversion-container'>
            <p>Use the currency conversion form below to convert from one currency to another.</p>
            <div className='form-container'>
                <form id='currencyConversionForm'>
                    <label for='amount'>Amount to Convert</label><br/>
                    <input id='amount' type='text' name='amount'/><br/>

                    <div className='fromCurrencySelection'>
                        <label for='fromCurrency'>From</label><br/>
                        <select id='fromCurrency'>
                            <option value='GBP'>GBP</option>
                        </select><br/>
                    </div>
                    <div className='toCurrencySelection'>
                        <label for='toCurrency'>To</label><br/>
                        <select id='toCurrency'> 
                            <option value='GBP'>USD</option>
                        </select><br/>
                    </div>
                    
                    <button id='convertCurrency' type='submit'>Convert</button>
                </form>
            </div>
        </div>
        <div className='conversion-results-container'>
            <p>100 GBP converted into USD is:</p>
            <p id='result'>132</p>
        </div>
    </div>
)

export default App;
