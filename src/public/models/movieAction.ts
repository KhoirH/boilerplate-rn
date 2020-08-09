export function GetGendreMovies() {
  return (dispatch: (arg0: {type: string; payload?: any}) => void) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: 'GENDRE_MOVIE_REDUCER_PENDING',
      });
      fetch(
        'https://api.themoviedb.org/3/genre/movie/list?api_key=4427ff2bc2dba7910879eec762de5dcc&language=en-US',
      )
        .then(async (res) => {
          const data = await res.json();
          dispatch({
            type: 'GENDRE_MOVIE_REDUCER_FULFILLED',
            payload: data.genres,
          });
          resolve(data);
        })
        .catch((err) => {
          dispatch({
            type: 'GENDRE_MOVIE_REDUCER_REJECTED',
          });
          reject(err);
        });
    });
}
export function GetPlayingMovies() {
  return (dispatch: (arg0: {type: string; payload?: any}) => void) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: 'NOW_PLAYING_MOVIES_REDUCER_PENDING',
      });
      fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=4427ff2bc2dba7910879eec762de5dcc&language=en-US&page=1',
      )
        .then(async (res) => {
          const data = await res.json();
          dispatch({
            type: 'NOW_PLAYING_MOVIES_REDUCER_FULFILLED',
            payload: data.results.slice(0, 3),
          });
          resolve(data);
        })
        .catch((err) => {
          dispatch({
            type: 'NOW_PLAYING_MOVIES_REDUCER_REJECTED',
          });
          reject(err);
        });
    });
}
export function GetUpcomingMovies() {
  return (dispatch: (arg0: {type: string; payload?: any}) => void) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: 'UPCOMING_MOVIES_REDUCER_PENDING',
      });
      fetch(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=4427ff2bc2dba7910879eec762de5dcc&language=en-US&page=1',
      )
        .then(async (res) => {
          const data = await res.json();
          dispatch({
            type: 'UPCOMING_MOVIES_REDUCER_FULFILLED',
            payload: data.results.slice(0, 10),
          });
          resolve(data);
        })
        .catch((err) => {
          dispatch({
            type: 'UPCOMING_MOVIES_REDUCER_REJECTED',
          });
          reject(err);
        });
    });
}
