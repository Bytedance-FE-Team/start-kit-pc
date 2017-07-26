import _ from 'lodash'

export const menu = {
  menu: {
    wulin: {
      icon: 'user',
      shaolin: 'wulin/shaolin',
      wudang: 'wulin/wudang',
      huashan: 'wulin/huashan'
    }
  }
}

export function formatMenu (source) {
  if (!source.length) {
    return []
  }
  _.forEach(source, o => {
    if (o.children) {
      _.forEach(o.children, c => {
        c.url = _.get(menu, c.code, '')
      })
    }
    o.icon = _.get(menu, o.code + '.icon', '')
  })
  return source
}

export function getTargetKey (menus, location) {
  let defaultKey
  let defaultOpenKey
  menus.some((menu) => {
    if (menu.children) {
      menu.children.some((sub) => {
        if (sub.url === location.pathname) {
          defaultKey = sub.code
          defaultOpenKey = menu.code
          return true
        }
        return false
      })
    } else {
      if (menu.url === location.pathname) {
        defaultKey = menu.code
        return true
      }
      return false
    }
  })
  return {
    defaultKey,
    defaultOpenKey
  }
}
