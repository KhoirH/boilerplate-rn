import {icon} from './variables';
export function GetIcon(iconName: string, status: boolean) {
  switch (iconName) {
    case 'Home':
      if (status) {
        return icon.HomeFocused;
      }
      return icon.Home;
    case 'Movie':
      if (status) {
        return icon.MovieFocused;
      }
      return icon.Movie;
    case 'Tv':
      if (status) {
        return icon.TvFocused;
      }
      return icon.Tv;
    default:
      return '';
  }
}
