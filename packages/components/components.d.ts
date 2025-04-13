// TODO，写在这里没生效
declare module 'vue' {
  export interface GlobalComponents {
    PIcon: typeof import('./icon/index').default
  }
}
export {}
