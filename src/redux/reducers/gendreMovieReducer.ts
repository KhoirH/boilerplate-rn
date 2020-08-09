interface IncludeData {
  id: number;
  name: string;
}
export interface GendreMovieState {
  isLoading: Boolean;
  results: IncludeData[];
  error: Boolean;
}

const gendreMovieState: GendreMovieState = {
  isLoading: false,
  error: false,
  results: [],
};

export default function (
  state: GendreMovieState = gendreMovieState,
  action: any,
) {
  switch (action.type) {
    case 'GENDRE_MOVIE_REDUCER_PENDING':
      return {...state, isLoading: true, error: false};
    case 'GENDRE_MOVIE_REDUCER_FULFILLED':
      return {...state, isLoading: false, results: action.payload};
    case 'GENDRE_MOVIE_REDUCER_REJECTED':
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
