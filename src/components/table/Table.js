import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root, options) {
    super($root, {
      listeners: ['mousedown', 'mouseup', 'mousemove']
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    // starting resizing cell/row
    if (event.target.dataset.resize) {
    }
  }

  onMousemove() {
    // setting size of cell/row
    console.log('mousemove');
  }

  onMouseup() {
    // finishing resizing
    console.log('mouseup');
  }
}
