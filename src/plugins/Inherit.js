export default function Inherit(prop) {
  return Vue => {
    const propRoot = `_${prop}_root`
    const propInner = `_${prop}_inner`

    Vue.mixin({
      beforeCreate() {
        if (this.$options[prop] === undefined) {
          this[propRoot] = (this.$parent && this.$parent[propRoot]) || this
          return
        }
        this[propRoot] = this
        this[propInner] = this.$options[prop]
      },
    })

    Object.defineProperty(Vue.prototype, prop, {
      get() {
        return this[propRoot][propInner]
      },
    })
  }
}
