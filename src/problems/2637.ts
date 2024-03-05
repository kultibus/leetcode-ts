type Fn = (...params: any[]) => Promise<any>;

export function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return Promise.race([
      new Promise((res, rej) =>
        setTimeout(() => {
          rej("Time Limit Exceeded");
        }, t)
      ),
      fn(...args),
    ]);
  };
}
