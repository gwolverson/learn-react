import React, { Component } from 'react';
import { PageTitle } from '../components/PageTitle';
import CurrencyConversionForm from '../components/CurrencyConversionForm';
import CurrencyConversionResults from '../components/CurrencyConversionResults';
import data from '../../data/sample_rates.json';
class CurrencyConverterContainer extends Component {

    render() {
        return (
            <div>
                <PageTitle text='Currency Converter'/>
                <div className='currency-conversion-container'>
                    <p>Use the currency conversion form below to convert from one currency to another.</p>
                    <CurrencyConversionForm data={data}/>
                </div>
                <CurrencyConversionResults/>
            </div>
        )
    }
}

export default CurrencyConverterContainer;