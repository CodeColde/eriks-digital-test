import { IProduct } from '../../entities/return';
import extractKeysFromObjectArray from '../../utils/extractKeysFromObjectArray';
import filterCompareKeys from '../../utils/filterCompareKeys';
import Badge from '../atoms/Badge';
import Cell from '../atoms/Cell';
import Row from '../atoms/Row';
import FormattedKey from '../molecules/FormattedKey';

interface IProps {
  data: IProduct[];
  count: number;
}

function CompareBody({ data, count }: IProps) {
  const compareValues = filterCompareKeys<IProduct>(data);
  const keysToCompare = extractKeysFromObjectArray(compareValues);
  const sortedKeys = keysToCompare?.sort((a, b) => a === "badges" ? -1 : a.toLowerCase() > b.toLowerCase() ? 1 : -1);

  return (
    <>
      {sortedKeys.length > 0 && sortedKeys.map((key, i) => (
        <Row key={key}>
          <FormattedKey>{key}</FormattedKey>
          {data.map((obj) => (
            <Cell key={`${obj.sku}-${key}`}>
              {key === "badges"
                ? obj[key].split("|").map((badge, i) => (
                  <Badge src={badge} key={`${badge}-${i}`} />
                )) : obj[key]
              }
            </Cell>
          ))}
        </Row>
      ))}
    </>
  );
}

export default CompareBody;