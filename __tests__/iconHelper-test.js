/**
 * @format
 */

import 'react-native';
import {GetIcon} from '../src/public/helpers/icon/iconHelper';

it('test correctly helper func GetIcon', () => {
  expect(GetIcon('Home')).toEqual('video');
});
