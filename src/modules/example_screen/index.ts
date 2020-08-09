import React from 'react';
import Screen from './screen';
import {connect, MapStateToPropsParam, DefaultRootState} from 'react-redux';

const mapsStateToProps: MapStateToPropsParam<DefaultRootState, null> = () => ({
  check: '',
});
const mapsDispatachToProps = {};

export default React.memo(
  connect(mapsStateToProps, mapsDispatachToProps)(Screen),
);
