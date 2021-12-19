import React, { Component } from 'react'
import loading from './Infinity-1s-200px.gif'

export default class spinner extends Component {
    render() {
        return (
            <div className="text-center">
                <img src={loading} alt="loading" style={{transform:"scale(0.5)"}}/>
            </div>
        )
    }
}
