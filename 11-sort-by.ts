declare module 'sort-by' {
  type item<T> = string | ((param: T) => any);
  function sortBy<T>(...params: item<T>[]): (a:T, b: T) => number;
  export = sortBy
}