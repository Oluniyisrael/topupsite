import React, { Component } from 'react'
import HomepageBody from '../../component/HomepageBody/HomepageBody'
import './HomePage.css'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div id='pageContainer'>
            <div id='page'>
                <HomepageBody/>
            </div>
        </div>
      </div>
    )
  }
}
