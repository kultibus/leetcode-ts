type Fn<T> = () => Promise<T>;

export function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const cache: any[] = new Array(functions.length);

    functions.forEach((fn, i, arr) => {
      fn()
        .then(result => {
          cache[i] = result;
          arr.length--;
          if (arr.length === 0) {
            return resolve(cache);
          }
        })
        .catch(reject);
    });
  });
}
