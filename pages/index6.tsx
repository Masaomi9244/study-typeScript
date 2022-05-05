// 【TypeScript入門#6】

// 配列
namespace Namespace1 {
  const foo: number[] = [1, 2, 3]; // ５行目と同じだがこっちのほうが使用される
  const bar: Array<number> = [1, 2,3];
  const baz: (number | string)[] = [1, "2", 3]; // 配列に2種類の型を入れたいとき
}

// ----------------------------------------------------------------------------

// Tuple型
// 一つ一つの要素に対して型をつけることができ、かつ要素の数が決まっている
// 配列を使うときはなるべくTuple型を使う
namespace Namespace2 {
  const foo: [string, number] = ["foo", 1];

  foo[0].substring; //.まで打つと型に合わせて補完が効く
  foo[1].toFixed;
}

// ----------------------------------------------------------------------------

// Any
// 型が不明な時に、型チェックを無効にしてコンパイルを無理やり通すときに使う
// 型の恩恵を受けられないのでなるべく使わない
namespace Namespace3 {
  const foo: any = [1, "string", true, [1, 2, 3]];
}

// ----------------------------------------------------------------------------

// Unknown
// 型は不明だけど、型安全にしたいときに使う
namespace Namespace4 {
  const foo: unknown = "hoge";
  const bar: any = "hoge";

  // foo.toFixed;      エラーになる 
  // bar.toFixed;      エラーにならない
  // foo.substring(2); エラーになる
  // bar.substring(2); エラーにならない

  // 40行目の解決策
  if (typeof foo === "string") {
    foo.substring(2);
  }
}

// ----------------------------------------------------------------------------

// void
// 関数の返り値が何もないときに使われる
function foo8(): void {
  alert("hello");
  // return エラーにならない
  // return undefined; エラーにならない
}
const foo9:() => void = () => {
  alert("hello");
}

// ----------------------------------------------------------------------------

// never型
// 発生し得ない値の型に付与される
function foo10(): never {
  throw new Error("foo");
}
