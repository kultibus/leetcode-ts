type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

// export function chunk(arr: Obj[], size: number): Obj[][] {
//   const newArr: Obj[][] = [];
//   let subArr: any[] = [];
//   let cnt = size;

//   arr.forEach((el, i, arr) => {
//     subArr.push(el);
//     cnt--;
//     if (cnt === 0 || i === arr.length - 1) {
//       newArr.push(subArr);
//       subArr = [];
//       cnt = size;
//     }
//   });

//   return newArr;
// }
export function chunk(arr: Obj[], size: number): Obj[][] {
	let chunkedArr = [];
	let i = 0;
	while (i < arr.length) {
			chunkedArr.push(arr.slice(i, (i += size)));
	}
	return chunkedArr;
}
