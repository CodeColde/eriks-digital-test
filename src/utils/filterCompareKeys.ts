import { IObjectExtension } from "../entities/objectExtension";
import nonComparableKeys from "../constants/nonComparableKeys";

export default function filterCompareKeys<D extends IObjectExtension>(data: Array<D>): Array<D> {
  if (data) {
    const newArr: Array<D> = [];
    data.forEach((el) => {
      const newObj: D = {...el};
      nonComparableKeys.forEach((key) => {
        delete newObj[key]
      })
      newArr.push(newObj);
    })

    return newArr;
  }
  return data;
}