type F = (...args: number[]) => void;

export function debounce(fn: F, t: number): F {
  let timer: ReturnType<typeof setTimeout>;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
}
