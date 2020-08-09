interface IncludeData {
  id: number;
  name: string;
}
export interface GendreTvState {
  isLoading: Boolean;
  results: IncludeData[];
  error: Boolean;
}

const gendreTvState: GendreTvState = {
  isLoading: false,
  error: false,
  results: [],
};

export default function (state: GendreTvState = gendreTvState, action: any) {
  switch (action.type) {
    case 'GENDRE_TV_REDUCER_PENDING':
      return {...state, isLoading: true, error: false};
    case 'GENDRE_TV_REDUCER_FULFILLED':
      return {...state, isLoading: false, results: action.payload};
    case 'GENDRE_TV_REDUCER_REJECTED':
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
