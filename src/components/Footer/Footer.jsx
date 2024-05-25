import { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <div className='footer'>
            <p>
                <address className='foot-text'>1000 Flower Street Glendale, CA 91201 US.</address>
            </p>
            <p className='foot-text'>director@example.com</p>
            <p>
                <a href="tel:+380509999999">+380509999999</a>
            </p>
        </div>
    )
  }
}

export default Footer