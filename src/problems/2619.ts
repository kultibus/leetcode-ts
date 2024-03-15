
export function problem2619() {
  const arr: [] = [];

  function lastElem() {
    return this.length ? this[this.length - 1] : -1;
  }

  Array.prototype.last = lastElem;

  console.log(arr.last());
}
