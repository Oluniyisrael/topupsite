import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav id='navbar'>
          <div>
            <span id='navtitle'> Israel's top up site</span>
          </div>
          <div className='navlinks'>
              <span className='navcontents'><a href='#body'>Contact me</a></span>
              <span className='navcontents'><a href='#body'>Top up proofs</a></span>
              <span className='navcontents'><a href='#body' title=''>Products</a><ul id='prod'>
                                                                                    <li><a href="#body"><img src='...' alt='...'/></a></li>
                                                                                    <li><a href="#body"><img src='...' alt='...'/></a></li>
                                                                                    </ul>
              </span>
              <span className='navcontents'><img src='...' alt='...' id='menu'/></span>
          </div>
            
        </nav>
      </div>
    )
  }
}
