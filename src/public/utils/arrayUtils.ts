interface GendreProps {
  name: string;
  id: number;
}
export function GetValueOfArrayGendre(
  listArray: GendreProps[],
  value: number[] = [],
  countGetData: number = 1,
) {
  const dataString = value
    .slice(0, countGetData)
    .map((id: number) => {
      const idListArray = listArray
        .filter((data) => data.id === id)
        .map((data) => data.name)
        .join('');
      return idListArray;
    })
    .join(',');
  return dataString;
}
