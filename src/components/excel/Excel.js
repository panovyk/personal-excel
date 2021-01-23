import {$} from '@core/dom'

export class Excel {
  constructor(selector, options) {
    this.$el = $(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    this.components = this.components.map( (Component) => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      $el.html(component.toHTML())
      $root.append($el)
      // eslint-disable-next-line max-len
      // $root.insertAdjacentHTML('beforeend', component.toHTML()) - old method without style
    })
    return $root
  }

  render() {
    const node = document.createElement('h1')
    node.textContent = 'test321'
    this.$el.append(this.getRoot())
    // check later mb
    this.components.forEach((component) => component.init())
  }
}
