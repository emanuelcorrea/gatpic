type InitialState = {
  title: string,
  results: object[],
  totals: number
}

type Action = {
  type: string,
  payload: {
    title: '',
    results: object[],
    totals: number
  }
}

const INITIAL_STATE: InitialState = {
  title: '',
  results: [],
  totals: 0
};

export default function images(state = INITIAL_STATE, action: Action) {
  switch (action.type) {
    case 'LOAD_IMAGES':
      return {
        ...state,
        title: action.payload.title,
        results: [
          ...state.results,
          ...action.payload.results
        ],
        totals: action.payload.totals
      }
    case 'CLEAR_IMAGES':
      return {
        ...state,
        results: []
      }
    default:
      return state;
  }
}
