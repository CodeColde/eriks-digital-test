export default function extractKeysFromObjectArray(data: Array<Record<string, any>>) {
  const uniqueKeys: Array<string> = [];
  data.forEach(obj => {
    Object.keys(obj).forEach(key => {
      if (!uniqueKeys.includes(key)) {
        uniqueKeys.push(key);
      }
    })
  })
  return uniqueKeys;
}