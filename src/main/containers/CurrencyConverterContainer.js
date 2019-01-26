import React, { Component } from 'react';
import { PageTitle } from '../components/PageTitle';
import CurrencyConversionForm from '../components/CurrencyConversionForm';
import CurrencyConversionResults from '../components/CurrencyConversionResults';

class CurrencyConverterContainer extends Component {

    render() {
        return (
            <div>
                <PageTitle/>
                <div className='currency-conversion-container'>
                    <p>Use the currency conversion form below to convert from one currency to another.</p>
                    <CurrencyConversionForm/>
                </div>
                <CurrencyConversionResults/>
            </div>
        )
    }
}

export default CurrencyConverterContainer;