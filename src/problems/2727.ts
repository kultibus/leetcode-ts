type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[];

export function isEmpty(obj: Obj): boolean {
  const stringFromObj = JSON.stringify(obj);

  return stringFromObj.length > 2 ? false : true;
}
