// file for export additional event functions (Pure functions)

// method for capitalise strings
export function capitalise(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
