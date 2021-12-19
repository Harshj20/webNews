import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container text-center" style={{color: this.props.mode === 'light' ? 'black' : 'white',marginTop:80}}>
                <h1>About Page</h1>
                <p>This web-app does not focuses on CSS part, it is developed to practice class based components, routing and fetching data through news api</p>
            </div>
        )
    }
}
