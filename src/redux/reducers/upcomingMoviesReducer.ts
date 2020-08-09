interface IncludeData {
  poster_path: string;
  vote_average: number;
  title: string;
  genre_ids: number[];
}
export interface UpcomingMoviesState {
  isLoading: Boolean;
  results: IncludeData[];
  error: Boolean;
}

const upcomingMoviesState: UpcomingMoviesState = {
  isLoading: false,
  error: false,
  results: [],
};

export default function (
  state: UpcomingMoviesState = upcomingMoviesState,
  action: any,
) {
  switch (action.type) {
    case 'UPCOMING_MOVIES_REDUCER_PENDING':
      return {...state, isLoading: true, error: false};
    case 'UPCOMING_MOVIES_REDUCER_FULFILLED':
      return {...state, isLoading: false, results: action.payload};
    case 'UPCOMING_MOVIES_REDUCER_REJECTED':
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
