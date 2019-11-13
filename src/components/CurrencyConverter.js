import React, {Component} from 'react'

class Currency extends Component {
    state = {
        currencyChosen: false,
        selectedCurrency: 'Select Currency',
        amount: 0
    }
    render(){
        const currencyData = [
            { name: 'Japanese Yen', symbol: '¥', rate: 113.6 },
            { name: 'British Pound', symbol: '£', rate: 0.77 },
            { name: 'Canadian Dollar', symbol: 'CAD', rate: 1.32 },
            { name: 'Mexican Peso', symbol: 'Mex$', rate: 20.41 },
            { name: 'Swiss Franc', symbol: 'Fr.', rate: 1.01 }
        ]
        const currencyOptions = currencyData.map((currency, index) => (
            <option key={index} value={index}>
                {currency.name}
            </option>
        ))
        return(
            <select>

            </select>
            
        )
    }
}