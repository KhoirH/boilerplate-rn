interface IncludeData {
  poster_path: string;
  vote_average: number;
  title: string;
}
export interface NowPlayingMoviesState {
  isLoading: Boolean;
  results: IncludeData[];
  error: Boolean;
}

const nowPlayingMoviesState: NowPlayingMoviesState = {
  isLoading: false,
  error: false,
  results: [],
};

export default function (
  state: NowPlayingMoviesState = nowPlayingMoviesState,
  action: any,
) {
  switch (action.type) {
    case 'NOW_PLAYING_MOVIES_REDUCER_PENDING':
      return {...state, isLoading: true, error: false};
    case 'NOW_PLAYING_MOVIES_REDUCER_FULFILLED':
      return {...state, isLoading: false, results: action.payload};
    case 'NOW_PLAYING_MOVIES_REDUCER_REJECTED':
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
