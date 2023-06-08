export class HashTable {
  private buckets: any[][];
  private SIZE = 10;

  constructor() {
    this.buckets = new Array();
    for (let i = 0; i < this.SIZE; i++) {
      this.buckets.push([]);
    }
  }

  get(key: string): any {
    const bucket = this.hash(key);
    const index = this.findIndex(bucket, key);

    if (typeof index === "number") {
      return this.buckets[bucket][index][1];
    }
  }

  set(key: string, value: any): void {
    const bucket = this.hash(key);
    const index = this.findIndex(bucket, key);

    if (typeof index === "number") {
      this.buckets[bucket][index][1] = value;
      return;
    }

    this.buckets[bucket].push([key, value]);
  }

  delete(key: string): any {
    const bucket = this.hash(key);
    const index = this.findIndex(bucket, key);

    if (typeof index === "number") {
      const value = this.buckets[bucket][index][1];
      this.buckets[bucket].splice(index, 1);
      return value;
    }
  }

  keys() {
    const keys: any[] = [];

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i].length > 0) {
        const keysInBucket = this.buckets[i].map((x) => x[0]);
        keys.push(...keysInBucket);
      }
    }

    return keys;
  }

  debug() {
    console.log(this.buckets);
  }

  private hash(key: string): number {
    return key.length % this.SIZE;
  }

  private findIndex(bucket: number, key: string): number | undefined {
    for (let i = 0; i < this.buckets[bucket].length; i++) {
      if (this.buckets[bucket][i][0] === key) {
        return i;
      }
    }
  }
}
