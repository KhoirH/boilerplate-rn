interface IncludeData {
  poster_path: string;
  vote_average: number;
  name: string;
  genre_ids: number[];
}
export interface AiringTodayTvState {
  isLoading: Boolean;
  results: IncludeData[];
  error: Boolean;
}

const airingTodayTvState: AiringTodayTvState = {
  isLoading: false,
  error: false,
  results: [],
};

export default function (
  state: AiringTodayTvState = airingTodayTvState,
  action: any,
) {
  switch (action.type) {
    case 'AIRING_TODAY_TV_REDUCER_PENDING':
      return {...state, isLoading: true, error: false};
    case 'AIRING_TODAY_TV_REDUCER_FULFILLED':
      return {...state, isLoading: false, results: action.payload};
    case 'AIRING_TODAY_TV_REDUCER_REJECTED':
      return {...state, isLoading: false, error: true};
    default:
      return state;
  }
}
