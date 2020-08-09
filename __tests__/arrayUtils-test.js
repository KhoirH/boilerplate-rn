/**
 * @format
 */

import 'react-native';
import {GetValueOfArrayGendre} from '../src/public/utils/arrayUtils';

const sampleListDataGende = [
  {
    id: 12,
    name: 'Action',
  },
  {
    id: 13,
    name: 'Horror',
  },
  {
    id: 14,
    name: 'Drama',
  },
];
it('test correctly utils func GetValueOfArrayGendre single data', () => {
  expect(GetValueOfArrayGendre(sampleListDataGende, [12, 13])).toEqual(
    'Action',
  );
});
it('test correctly utils func GetValueOfArrayGendre multiple data', () => {
  expect(GetValueOfArrayGendre(sampleListDataGende, [12, 13, 14], 3)).toEqual(
    'Action,Horror,Drama',
  );
});
