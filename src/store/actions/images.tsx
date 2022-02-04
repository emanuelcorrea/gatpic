type Results = {
  results: object[],
  total: number
}

export function loadImages(title: string, data: Results) {
  return {
    type: 'LOAD_IMAGES',
    payload: {
      title,
      results: data.results,
      totals: data.total
    }
  }
}

export function clearImages() {
  return {
    type: 'CLEAR_IMAGES'
  }
}
