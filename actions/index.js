let nextItemId = 0
export const urlReceive = (text) => {
  return {
    type: 'POST',
    id: nextItemId++,
    text
  }
}



