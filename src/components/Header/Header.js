import React from 'react'
import './Header.less'

export const Header = (props) => (
  <header className='header'>
    <span className='user-name header-item'>{'苏理煌'}</span>
    <a className='logout header-item' href='/logout'>退出</a>
  </header>
)

export default Header
