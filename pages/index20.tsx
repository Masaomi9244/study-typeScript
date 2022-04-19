// 【TypeScript入門 #20】Genericsの型引数が複数あるパターンやLookup Typesとの併用について解説！Genericsが使われているシーンも紹介！

// Genericsの型引数が複数あるパターン
export function foo<T extends string, K extends number, U>
  (bar: T, baz: K, hoge: U): object {
    return {}
};
const foo2 = foo("a", 1, null);

