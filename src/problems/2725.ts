type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

export const cancellableInt = (
  fn: Fn,
  args: JSONValue[],
  t: number
): Function => {
  let timer = setTimeout(function func() {
		fn(...args);
    timer = setTimeout(func, t);
  }, 0);
  return () => clearTimeout(timer);
};
