import Vue from 'vue'

export default class State {

  constructor(modules) {
    this.$registerModules(modules)
    new Vue({ data: () => this })
  }

  $registerModules(modules) {
    for (const moduleName of Object.keys(modules)) {
      const key = uncapitalize(moduleName)
      Vue.set(this, moduleName, modules[moduleName])
      Vue.set(this, key, new modules[moduleName](this, this[key]))
    }
  }

  $unregisterModule(moduleName) {
    delete this[uncapitalize(moduleName)]
  }
}

function uncapitalize(str) {
  return str[0].toLowerCase() + str.slice(1)
}
