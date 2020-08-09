export function GetGendreTv() {
  return (dispatch: (arg0: {type: string; payload?: any}) => void) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: 'GENDRE_TV_REDUCER_PENDING',
      });
      fetch(
        'https://api.themoviedb.org/3/genre/tv/list?api_key=4427ff2bc2dba7910879eec762de5dcc&language=en-US',
      )
        .then(async (res) => {
          const data = await res.json();
          dispatch({
            type: 'GENDRE_TV_REDUCER_FULFILLED',
            payload: data.genres,
          });
          resolve(data);
        })
        .catch((err) => {
          dispatch({
            type: 'GENDRE_TV_REDUCER_REJECTED',
          });
          reject(err);
        });
    });
}

export function GetOnAirTv() {
  return (dispatch: (arg0: {type: string; payload?: any}) => void) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: 'ON_AIR_TV_REDUCER_PENDING',
      });
      fetch(
        'https://api.themoviedb.org/3/tv/on_the_air?api_key=4427ff2bc2dba7910879eec762de5dcc&language=en-US&page=1',
      )
        .then(async (res) => {
          const data = await res.json();
          dispatch({
            type: 'ON_AIR_TV_REDUCER_FULFILLED',
            payload: data.results.slice(0, 3),
          });
          resolve(data);
        })
        .catch((err) => {
          dispatch({
            type: 'ON_AIR_TV_REDUCER_REJECTED',
          });
          reject(err);
        });
    });
}
export function GetAiringTodayTv() {
  return (dispatch: (arg0: {type: string; payload?: any}) => void) =>
    new Promise((resolve, reject) => {
      dispatch({
        type: 'AIRING_TODAY_TV_REDUCER_PENDING',
      });
      fetch(
        'https://api.themoviedb.org/3/tv/airing_today?api_key=4427ff2bc2dba7910879eec762de5dcc&language=en-US&page=1',
      )
        .then(async (res) => {
          const data = await res.json();
          dispatch({
            type: 'AIRING_TODAY_TV_REDUCER_FULFILLED',
            payload: data.results.slice(0, 10),
          });
          resolve(data);
        })
        .catch((err) => {
          dispatch({
            type: 'AIRING_TODAY_TV_REDUCER_REJECTED',
          });
          reject(err);
        });
    });
}
