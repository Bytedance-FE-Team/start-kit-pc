import React, { Component } from 'react'
import Header from 'components/Header'
import Bread from 'components/Bread'
import PropTypes from 'prop-types'
import Sidebar from 'components/Sidebar'
import { BackTop, Button } from 'antd'
import { getTargetKey, formatMenu } from 'until/menus'
import { config } from './config'

import 'static/styles/core.less'
import './CoreLayout.less'

class CoreLayout extends Component {
  render () {
    const { children, location } = this.props

    const items = formatMenu(config.menus)
    const { defaultKey, defaultOpenKey } = getTargetKey(items, location)
    console.log('items:', items)
    return (
      <div className='core-container'>
        <BackTop>
          <Button type='primary' shape='circle' icon='rocket' size='large' />
        </BackTop>
        <aside className='layout-aside'>
          <Sidebar
            title={'超级无敌系统'}
            items={config.menus}
            defaultKey={defaultKey}
            defaultOpenKey={defaultOpenKey}
          />
        </aside>
        <div className='layout-main'>
          <Header />
          <div className='layout-content' id='content'>
            <Bread
              menus={items}
              target={location.pathname}
            />
            {children}
          </div>
        </div>
      </div>
    )
  }
}

CoreLayout.propTypes = {
  location: PropTypes.object,
  children: PropTypes.element.isRequired
}

export default CoreLayout

