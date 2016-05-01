import angular from 'angular'
import { pascal, kebab } from 'case'
import { PREFIX, APP_NAME } from './constants'

const angularModule = moduleName => (name, dependencies, moduleOptions) => (
  angular
    .module(`${APP_NAME}.${moduleName}.${kebab(name)}`, dependencies)
    [moduleName](`${PREFIX}${pascal(name)}`, moduleOptions)
    .name
)

export const component = angularModule('component')
export const directive = angularModule('directive')
export const filter = angularModule('filter')