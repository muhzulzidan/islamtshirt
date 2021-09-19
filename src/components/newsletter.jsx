import * as React from 'react';

import addToMailchimp from 'gatsby-plugin-mailchimp'


export  default class classNewsLetter extends React.Component {
    constructor() {
        super()
        this.state = { email: "", result: null }
      }
      _handleSubmit = async e => {
        e.preventDefault()
        const result = await addToMailchimp(this.state.email)
        this.setState({result: result})
        alert("thank you")
      }
    handleChange = event => {
        this.setState({ email: event.target.value })
      }
    render() {
        return (
        <div className="newsletter">
            {/* newsletter */}
            <div className="newsletter__container">
                <div className="newsletter__container__title">
                    <h2>SIGN UP TO OUR NEWSLETTER FOR FREE TIPS, AND INSIGHTS ON ISLAMIC FASHION</h2>
                </div>
                <div className="newsletter__container__form">
                    <form  onSubmit={this._handleSubmit}>
                        <input onChange={this.handleChange} type="email" name="email" placeholder="Your Email"/>
                        <button type="submit">Join</button>
                    </form>
                </div>
            </div>
        </div>
)}}
