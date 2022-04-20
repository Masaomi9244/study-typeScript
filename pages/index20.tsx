// 【TypeScript入門 #20】Genericsの型引数が複数あるパターンやLookup Typesとの併用について解説！Genericsが使われているシーンも紹介！

// Genericsの型引数が複数あるパターン
export function foo<T extends string, K extends number, U>
  (bar: T, baz: K, hoge: U): object {
    return {}
};
const foo2 = foo("a", 1, null);

// LookupTypesとは
// オブジェクトに値してプロパティ名でアクセスできる
type Obj = {
  a: string,
  b: boolean,
};
type Obj2 = Obj["b"];

// LookupTypesとGenericsの組み合わせ
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
};
function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]) {
  return obj[key] = value ;
};
const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};
const hoge = getProperty(obj, "baz");
const hoge2 = setProperty(obj, "baz", 100);
