const CODES = {
  A: 65,
  Z: 90
}

// eslint-disable-next-line no-unused-vars
function createCell() {
  return `
     <div class=cell contenteditable>
     B2
     </div>
    `
}

function createCol(col) {
  return `
    <div class=column>
    ${col}
    </div>
    `
}

function createRow() {
  return `
<div class="row">
<div class="row-info"></div>
<div class="row-data"></div>
</div>
`
}

export function createTable(rowsCount = 15,) {
  const columnsCont = CODES.Z - CODES.A
  const rows = []

  const columns = new Array(columnsCont)
      .fill('')
      .map((el, index) => {
        return String.fromCharCode(CODES.A + index)
      })
      .map((el) => {
        return createCol(el)
      })
      .join('')

  rows.push(createRow(columns))

  for (let i = 0; i < rowsCount; i++) {
    rows.push(createRow())
  }

  return rows.join('')
}
