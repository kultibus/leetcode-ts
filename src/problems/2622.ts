export class TimeLimitedCache {
  cashe: Map<number, [number, boolean, ReturnType<typeof setTimeout>]>;

  constructor() {
    this.cashe = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    if (this.cashe.has(key)) {
      this.cashe.get(key)[0] = value;

      clearTimeout(this.cashe.get(key)[2]);

      this.cashe.get(key)[2] = setTimeout(() => {
        this.cashe.get(key)[1] = false;
      }, duration);

      return this.cashe.get(key)[1] ? true : false;
    } else {
      this.cashe.set(key, [
        value,
        true,
        setTimeout(() => {
          this.cashe.get(key)[1] = false;
        }, duration),
      ]);
      return false;
    }
  }

  get(key: number): number {
    if (this.cashe.has(key) && this.cashe.get(key)[1]) {
      return this.cashe.get(key)[0];
    }
    return -1;
  }

  count(): number {
    if (this.cashe.size > 0) {
      let count = 0;

      for (const arr of this.cashe.values()) {
        if (arr[1]) count++;
      }
      return count;
    }
  }
}
