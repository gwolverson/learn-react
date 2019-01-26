import React, { Component } from 'react';
import { PageTitle } from '../components/PageTitle';
import CurrencyConversionForm from '../components/CurrencyConversionForm';
import CurrencyConversionResults from '../components/CurrencyConversionResults';
import data from '../../data/sample_rates.json';

class CurrencyConverterContainer extends Component {

    state = {
        amount: 0,
        fromCurrency: null,
        toCurrency: null,
        result: null,
        promptSelection: false
    }

    handleChange = event => this.setState({amount: event.target.value})

    handleSelect = event => {
        let id = event.target.id;
        let selectedIndex = event.target.selectedIndex;

        this.setState({
            [id]: [event.target.value, event.target.childNodes[selectedIndex].id]
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const fromCurrency = this.state.fromCurrency;
        const toCurrency = this.state.toCurrency;

        if(toCurrency !== null && fromCurrency !== null) {
            const conversion = this.state.amount / fromCurrency[1] * toCurrency[1]
            const result = Math.round(conversion * 100) / 100;
            this.setState({
                result,
                promptSelection: false
            })
        } else {
            this.setState({promptSelection: true})
        }
    }

    render() {
        return (
            <div>
                <PageTitle text='Currency Converter'/>
                <div className='currency-conversion-container'>
                    <p>Use the currency conversion form below to convert from one currency to another.</p>
                    <CurrencyConversionForm 
                        handleChange={this.handleChange}
                        handleSelect={this.handleSelect}
                        handleSubmit={this.handleSubmit}
                        data={data}
                    />
                </div>
                {this.state.promptSelection &&
                    <p>Please enter an amount and select both a from and to currency to convert.</p>
                }
                {this.state.result &&
                    <CurrencyConversionResults 
                        amount={this.state.amount}
                        fromCurrencyKey={this.state.fromCurrency && this.state.fromCurrency[0]}
                        toCurrencyKey={this.state.toCurrency && this.state.toCurrency[0]}
                        result={this.state.result}
                    />
                }
            </div>
        )
    }
}

export default CurrencyConverterContainer;