const CODES = {
  A: 65,
  Z: 90
}

function toCell() {
  return `
     <div class=cell contenteditable>
     </div>
    `
}

function toColumn(col) {
  return `
    <div class=column>
    ${col}
  <div class="col-resize" data-resize="col"></div>
    </div>
    `
}

function createRow(index, content) {
  const resize = index ? `<div class="row-resize" data-resize="row"></div>` : ''
  return `
<div class="row">
<div class="row-info">
${index ? index : ''}
${resize}
</div>
<div class="row-data">${content}</div>
</div>
`
}

// function resizeRow (){
//
// }

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15,) {
  const columnsCont = CODES.Z - CODES.A
  const rows = []

  const columns = new Array(columnsCont)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(null, columns))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(columnsCont)
        .fill('')
        .map(toCell)
        .join('')
    rows.push(createRow(i+1, cells))
  }

  return rows.join('')
}
