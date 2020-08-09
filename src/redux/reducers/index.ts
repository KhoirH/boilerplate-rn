import AiringTodayTvReducer from './airingTodayTvReducer';
import OnAirTvReducer from './onAirTvReducer';
import NowPlayingMoviesReducer from './nowPlayingMoviesReducer';
import UpcomingMoviesReducer from './upcomingMoviesReducer';
import GendreMovieReducer from './gendreMovieReducer';
import GendreTvReducer from './gendreTvReducer';
import {ReducersMapObject} from 'redux';

const reducers: ReducersMapObject = {
  AiringTodayTvReducer,
  OnAirTvReducer,
  NowPlayingMoviesReducer,
  UpcomingMoviesReducer,
  GendreMovieReducer,
  GendreTvReducer,
};

export default reducers;
