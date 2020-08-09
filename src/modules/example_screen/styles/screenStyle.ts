import {StyleSheet, ViewStyle, ImageStyle, TextStyle} from 'react-native';
import androidStyles from './androidStyles';

interface Styles extends ViewStyle, TextStyle, ImageStyle{
  i: string;
};

const a: Styles = {};

export default StyleSheet.create({
  wrapper: {
    paddingBottom: 20,
  },
  wrapperSwipper: {
    height: 250,
  },
  wrapperPlayMovie: {
    position: 'relative',
  },
  wrapperOnAirTv: {
    position: 'relative',
    marginHorizontal: 20,
    marginTop: 20,
  },
  wrapperLabelHighlight: {
    position: 'absolute',
    backgroundColor: '#e64a19',
    zIndex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomRightRadius: 20,
  },
  wrapperLabelTitle: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000000aa',
    zIndex: 1,
    left: 0,
    paddingVertical: 5,
    paddingHorizontal: 20,
    minWidth: '50%',
    borderTopRightRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperLabelRate: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  wrapperUpcomingMovies: {
    margin: 20,
  },
  wrapperAiringToday: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  labelHighlight: {
    color: 'white',
    fontSize: 18,
  },
  labelRate: {
    color: 'white',
    fontSize: 15,
  },
  slide: {
    flex: 1,
    backgroundColor: '#444',
  },
  coverImage: {
    flex: 1,
  },
  textTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
