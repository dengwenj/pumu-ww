import { type Plugin } from 'vue'

type ComponentAndInstall<T> = T & Plugin
export function withInstall<T>(component: T) {
  const compObj = (component as ComponentAndInstall<T> & { name: string })

  // 给组件对象加上 install 方法，用在 use 上面的话，需要 install 方法
  // 做的事情就是个给全局注册当前组件
  compObj.install = function (app) {
    app.component(compObj.name, compObj)
  }
  return component as ComponentAndInstall<T>
}
