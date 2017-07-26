import React from 'react'
import { Breadcrumb } from 'antd'
import { Link } from 'react-router'
import _ from 'lodash'

const createBreadcrumb = (items) => {
  console.log(items)
  return items.length ? items.map(i => {
    return <Breadcrumb.Item key={i} >{i}</Breadcrumb.Item>
  }) : null
}

const getBreadItem = (menus, pathname) => {
  let result = []
  const _arr = pathname.split('/')
  const lev1 = _.filter(menus, { code: `menu.${_arr[0]}` })[0]
  const lev2 = lev1 && lev1.children && _.filter(lev1.children, { code: `menu.${_arr[0]}.${_arr[1]}` })[0]
  if (lev1) {
    result.push(lev1 && lev1.name, lev2 && lev2.name)
  }
  return result
}

export const Bread = (props) => {
  const { menus, target } = props
  const items = getBreadItem(menus, target)
  const breads = createBreadcrumb(items)
  return (
    <div className='bread'>
      <Breadcrumb>
        <Breadcrumb.Item key={'主页'}><Link to='/'>主页</Link></Breadcrumb.Item>
        {breads}
      </Breadcrumb>
    </div>
  )
}

Bread.propTypes = {
  menus: React.PropTypes.array,
  target: React.PropTypes.string
}

Bread.defaultProps = {

}

export default Bread
