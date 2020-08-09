interface IncludeData {
  poster_path: string;
  vote_average: number;
  name: string;
}
export interface OnAirDataState {
  isLoading: Boolean;
  results: IncludeData[];
  error: Boolean;
}

const onAirDataState: OnAirDataState = {
  isLoading: false,
  error: false,
  results: [],
};

export default function (state: OnAirDataState = onAirDataState, action: any) {
  switch (action.type) {
    case 'ON_AIR_TV_REDUCER_PENDING':
      return {...state, isLoading: true, error: false};
    case 'ON_AIR_TV_REDUCER_FULFILLED':
      return {...state, isLoading: false, results: action.payload};
    case 'ON_AIR_TV_REDUCER_REJECTED':
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
