import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router'
import _ from 'lodash'
const SubMenu = Menu.SubMenu

import './Sidebar.less'

const buildMenu = (node) => (
  <Menu.Item key={String(node.code)}>
    <Link to={node.url}>{node.name}</Link>
  </Menu.Item>
)

class Sidebar extends React.Component {

  constructor (props) {
    super(props)
  }
  getMenu (items = []) {
    return items.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={String(item.code)}
            title={<span><Icon type={item.icon} />{item.name}</span>}
          >
            {item.children.map((node) => {
              return buildMenu(node)
            })}
          </SubMenu>
        )
      } else {
        return buildMenu(item)
      }
    })
  }

  render () {
    const { items, defaultKey, title } = this.props
    const keys = _.map(items, 'code')
    return (
      <div className='sidebar'>
        <Link className='logo' to={{ pathname:'/' }}>{title}</Link>
        <div className='menus'>
          <Menu
            mode='inline'
            defaultSelectedKeys={[String(defaultKey)]}
            defaultOpenKeys={keys}
          >
            {this.getMenu(items)}
          </Menu>
        </div>

      </div>
    )
  }
}

Sidebar.propTypes = {
  title: React.PropTypes.string,
  items: React.PropTypes.array.isRequired,
  defaultKey: React.PropTypes.string
}

Sidebar.defaultProps = {
  defaultKey: '',
  defaultOpenKey: ''
}

export default Sidebar
